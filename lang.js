/**
 * lang.js — Emek Ajans Language Switcher Utility
 * Works for both root (TR) and en/ (EN) pages.
 */

(function() {
  const isEN = window.location.pathname.includes('/en/');

  // ── Mark active lang buttons ──────────────────────
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === (isEN ? 'en' : 'tr'));
  });
  document.querySelectorAll('.mobile-lang-btn').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === (isEN ? 'en' : 'tr'));
  });

  // Update desktop lang button label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = isEN ? '🇬🇧 EN' : '🇹🇷 TR';

  // ── Switch language ───────────────────────────────
  window.setLang = function(lang) {
    closeLangDropdown();
    closeMobileNav();
    const filename = window.location.pathname.split('/').pop() || 'index.html';
    if (lang === 'en' && !isEN) {
      window.location.href = 'en/' + filename;
    } else if (lang === 'tr' && isEN) {
      window.location.href = '../' + filename;
    }
  };

  // ── Desktop dropdown ──────────────────────────────
  window.toggleLangDropdown = function() {
    const btn = document.getElementById('langToggleBtn');
    const dd  = document.getElementById('langDropdown');
    if (!dd) return;
    const opened = dd.classList.toggle('open');
    if (btn) btn.classList.toggle('open', opened);
  };
  window.closeLangDropdown = function() {
    const btn = document.getElementById('langToggleBtn');
    const dd  = document.getElementById('langDropdown');
    if (dd) dd.classList.remove('open');
    if (btn) btn.classList.remove('open');
  };

  // Close dropdown on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#langSwitcher')) closeLangDropdown();
  });

  // ── Mobile nav ────────────────────────────────────
  window.toggleMobileNav = function() {
    const hb  = document.getElementById('hamburger');
    const nav = document.getElementById('mobileNav');
    if (!nav) return;
    const opened = nav.classList.toggle('open');
    if (hb) hb.classList.toggle('open', opened);
    document.body.style.overflow = opened ? 'hidden' : '';
  };
  window.closeMobileNav = function() {
    const hb  = document.getElementById('hamburger');
    const nav = document.getElementById('mobileNav');
    if (nav) nav.classList.remove('open');
    if (hb)  hb.classList.remove('open');
    document.body.style.overflow = '';
  };
})();

// ── ADMIN DYNAMIC PREVIEW MODE ──────────────────────────────
(function() {
  try {
    const creds = localStorage.getItem('ea_credentials');
    const dataStr = localStorage.getItem('ea_dashboard_data');
    if (!creds || !dataStr) return;

    const data = JSON.parse(dataStr);
    const isEn = document.documentElement.lang.toLowerCase().includes('en');
    
    let path = window.location.pathname.toLowerCase();
    if (path.endsWith('/')) path += 'index.html';
    
    let pageName = path.split('/').filter(p => p.endsWith('.html'))[0];
    if (!pageName) pageName = 'index.html';
    pageName = pageName.replace('.html', '');
    
    const pageId = (isEn ? 'en-' : 'tr-') + pageName;
    const pageData = data[pageId];
    if (!pageData) return;

    document.addEventListener('DOMContentLoaded', () => {
      // Admin klasörü içinde değilsek çalışsın
      if (window.location.pathname.includes('/admin')) return;

      let previewCount = 0;

      // Replace Text
      if (pageData.content) {
        Object.entries(pageData.content).forEach(([key, val]) => {
          if(!val) return;
          const el = document.querySelector(`[data-cms="${key}"]`);
          if (el) { el.innerHTML = val; previewCount++; }
        });
      }
      
      // Replace Images
      if (pageData.images) {
        pageData.images.forEach(img => {
          if(!img.url) return;
          const el = document.querySelector(`[data-cms-img="${img.id}"]`);
          if (el) {
            if (el.tagName === 'IMG') el.src = img.url;
            else {
              const str = el.getAttribute('style') || '';
              if (str.includes('background-image')) el.setAttribute('style', str.replace(/url\(['"]?.*?['"]?\)/, `url('${img.url}')`));
              else el.style.backgroundImage = `url('${img.url}')`;
            }
            previewCount++;
          }
        });
      }

      if (previewCount > 0) {
        const badge = document.createElement('div');
        badge.innerHTML = `<span>👀 Önizleme Modu (Canlı Değil)</span>`;
        badge.style.cssText = 'position:fixed;bottom:24px;left:24px;background:#C8102E;color:#fff;padding:8px 16px;border-radius:24px;font-size:12px;font-weight:bold;z-index:999999;box-shadow:0 4px 12px rgba(0,0,0,0.2)';
        document.body.appendChild(badge);
      }
    });

  } catch(e) { console.error('Preview error:', e); }
})();
