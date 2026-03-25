const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Load original page structure and image default arrays
const dataJsPath = path.join(__dirname, 'admin', 'data.js');
let dataJsContent = fs.readFileSync(dataJsPath, 'utf8');

// A very simple regex to extract the SITE_PAGES array object string
const sitePagesMatch = dataJsContent.match(/const\s+SITE_PAGES\s*=\s*(\[[\s\S]*?\]);/);
if (!sitePagesMatch) {
  console.error("❌ SITE_PAGES array not found in admin/data.js");
  process.exit(1);
}

let SITE_PAGES;
try {
  // Use eval to safely parse the JS array 
  // (since it contains unquoted keys which JSON.parse cannot read)
  SITE_PAGES = eval(sitePagesMatch[1]);
} catch(e) {
  console.error("❌ Failed to parse SITE_PAGES: ", e);
  process.exit(1);
}

// Check for updated content payload (Saved via Dashboard)
const contentJsonPath = path.join(__dirname, 'admin', 'content.json');
let contentPayload = {};

if (fs.existsSync(contentJsonPath)) {
  try {
    const raw = fs.readFileSync(contentJsonPath, 'utf8');
    contentPayload = JSON.parse(raw);
    console.log("✅ Custom content loaded from admin/content.json");
  } catch(e) {
    console.warn("⚠️ Failed to parse admin/content.json, using defaults.", e);
  }
} else {
  console.log("ℹ️ No admin/content.json found. Using default data.js payload.");
}

function getPageData(id, defaultPageObj) {
  const saved = (contentPayload.pages && contentPayload.pages[id]) ? contentPayload.pages[id] : {};
  return {
    seo: { ...defaultPageObj.seo, ...(saved.seo || {}) },
    content: { ...defaultPageObj.content, ...(saved.content || {}) },
    images: defaultPageObj.images.map(img => ({
      ...img, 
      ...(saved.images && saved.images.find ? (saved.images.find(s => s.id === img.id) || {}) : {}) 
    }))
  };
}

console.log("🚀 Starting Emek Ajans Build Process...");

// Iterate through each page defined in structure
SITE_PAGES.forEach(page => {
  console.log(`\n⏳ Building page: ${page.name} (${page.lang}) - ${page.path}`);
  // Handle paths relative to admin folder '..' 
  const relativePath = page.path.replace('../', '');
  const htmlPath = path.join(__dirname, relativePath);

  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ HTML File not found: ${htmlPath}`);
    return;
  }

  const mergedData = getPageData(page.id, page);
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // Parse with Cheerio
  const $ = cheerio.load(htmlContent);

  // 1. Update SEO Tags
  const seo = mergedData.seo;
  if(seo.title) $('title').text(seo.title);
  if(seo.description) $('meta[name="description"]').attr('content', seo.description);
  if(seo.keywords) $('meta[name="keywords"]').attr('content', seo.keywords);
  if(seo.ogTitle) $('meta[property="og:title"], meta[name="og:title"]').attr('content', seo.ogTitle);
  if(seo.ogDesc) $('meta[property="og:description"], meta[name="og:description"]').attr('content', seo.ogDesc);
  if(seo.ogImage) $('meta[property="og:image"], meta[name="og:image"]').attr('content', seo.ogImage);
  if(seo.canonical) {
    if ($('link[rel="canonical"]').length) {
      $('link[rel="canonical"]').attr('href', seo.canonical);
    } else {
      $('head').append(`<link rel="canonical" href="${seo.canonical}" />`);
    }
  }

  // 2. Update Content (data-cms="key")
  const content = mergedData.content;
  for (const [key, val] of Object.entries(content)) {
    // Escape HTML from user inputs if needed, or allow raw HTML. We allow raw html based on exact structure.
    const el = $(`[data-cms="${key}"]`);
    if(el.length) {
      // Set inner content, maintaining any child elements if it's text, or replacing wrapper.
      // Usually val is just text. Let's use html() so things like <br> are preserved.
      el.html(val);
    }
  }

  // 3. Update Images (data-cms-img="id")
  const images = mergedData.images;
  images.forEach(imgData => {
    const el = $(`[data-cms-img="${imgData.id}"]`);
    if(el.length) {
      if(el.is('img')) {
        el.attr('src', imgData.url);
      } else {
        // e.g. background image
        // Attempt to parse out inline style or just set it:
        // We will do a generic replacement if it's style="background-image: url('...')"
        const style = el.attr('style') || '';
        // rudimentary naive replacement (a realistic project might need more regex here)
        if(style.includes('background-image')) {
          el.attr('style', style.replace(/url\(['"]?.*?['"]?\)/, `url('${imgData.url}')`));
        } else {
           el.css('background-image', `url('${imgData.url}')`);
        }
      }
    }
  });

  // Write changes back to the actual HTML file
  fs.writeFileSync(htmlPath, $.html());
  console.log(`✅ ${page.name} (${page.lang}) successfully built!`);
});

console.log("\n🎉 Build process finished successfully!");
