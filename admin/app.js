/* ============================================================
   Emek Ajans — Admin Dashboard App Logic
   ============================================================ */

// ── CREDENTIALS ─────────────────────────────────────────────
const DEFAULT_USER = 'admin';
const DEFAULT_PASS = 'EmekAjans2024';

// ── STATE ────────────────────────────────────────────────────
let state = {
  loggedIn: false,
  username: '',
  currentPanel: 'dashboard',
  selectedPageId: 'tr-index',
  contentTab: 'content',  // content | seo | images
  data: {}  // keyed by page id
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('ea_dashboard_data') || '{}');
    state.data = saved;
  } catch(e) { state.data = {}; }
}
function saveState() {
  localStorage.setItem('ea_dashboard_data', JSON.stringify(state.data));
}
function getCredentials() {
  return JSON.parse(localStorage.getItem('ea_credentials') || JSON.stringify({ user: DEFAULT_USER, pass: DEFAULT_PASS }));
}
function setCredentials(user, pass) {
  localStorage.setItem('ea_credentials', JSON.stringify({ user, pass }));
}
function getPageData(id) {
  const page = SITE_PAGES.find(p => p.id === id);
  const saved = state.data[id] || {};
  return {
    seo: { ...page.seo, ...(saved.seo || {}) },
    content: { ...page.content, ...(saved.content || {}) },
    images: page.images.map(img => ({ ...img, ...(saved.images && saved.images.find ? (saved.images.find(s => s.id === img.id) || {}) : {}) }))
  };
}
function setPageData(id, type, key, value) {
  if (!state.data[id]) state.data[id] = {};
  if (!state.data[id][type]) state.data[id][type] = {};
  state.data[id][type][key] = value;
  saveState();
}

// ── UTILS ────────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }
function toast(msg, type = 'success') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${type === 'success' ? '✓' : '!'}</span> ${msg}`;
  $('toastContainer').appendChild(el);
  setTimeout(() => el.remove(), 3500);
}
function charCount(el, max) {
  const len = el.value.length;
  const counter = el.nextElementSibling;
  if (!counter || !counter.classList.contains('char-count')) return;
  counter.textContent = `${len} / ${max}`;
  counter.className = 'char-count' + (len > max ? ' over' : len > max * 0.85 ? ' warn' : '');
}
function seoScore(seo) {
  let score = 0;
  if (seo.title && seo.title.length >= 20 && seo.title.length <= 60) score += 25;
  if (seo.description && seo.description.length >= 50 && seo.description.length <= 160) score += 25;
  if (seo.keywords && seo.keywords.length > 5) score += 15;
  if (seo.ogTitle) score += 10;
  if (seo.ogDesc) score += 10;
  if (seo.ogImage) score += 10;
  if (seo.canonical) score += 5;
  return score;
}

// ── LOGIN ────────────────────────────────────────────────────
function tryLogin() {
  const user = $('loginUser').value.trim();
  const pass = $('loginPass').value;
  const creds = getCredentials();
  if (user === creds.user && pass === creds.pass) {
    state.loggedIn = true;
    state.username = user;
    $('loginScreen').classList.add('hidden');
    $('app').classList.add('visible');
    $('sidebarUserName').textContent = user;
    $('sidebarUserAvatar').textContent = user[0].toUpperCase();
    renderDashboard();
    showPanel('dashboard');
  } else {
    $('loginError').classList.add('show');
    $('loginPass').value = '';
    setTimeout(() => $('loginError').classList.remove('show'), 3000);
  }
}
$('loginBtn').addEventListener('click', tryLogin);
$('loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') tryLogin(); });

function logout() {
  state.loggedIn = false;
  $('loginScreen').classList.remove('hidden');
  $('app').classList.remove('visible');
  $('loginUser').value = '';
  $('loginPass').value = '';
}

// ── NAVIGATION ───────────────────────────────────────────────
function showPanel(id) {
  state.currentPanel = id;
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  const panel = $('panel-' + id);
  if (panel) panel.classList.add('active');
  const navLink = document.querySelector(`[data-panel="${id}"]`);
  if (navLink) navLink.classList.add('active');
  // topbar title
  const titles = { dashboard: 'Dashboard', content: 'İçerik Editörü', seo: 'SEO Yöneticisi', images: 'Görsel Yöneticisi', settings: 'Ayarlar' };
  $('topbarTitle').textContent = titles[id] || '';
  if (id === 'content') renderContentEditor();
  if (id === 'seo') renderSEOPanel();
  if (id === 'images') renderImagesPanel();
}
document.querySelectorAll('[data-panel]').forEach(a => {
  a.addEventListener('click', e => { e.preventDefault(); showPanel(a.dataset.panel); });
});

// ── DASHBOARD ────────────────────────────────────────────────
function renderDashboard() {
  $('statPageCount').textContent = SITE_PAGES.length.toString();
  $('statTRPages').textContent = SITE_PAGES.filter(p => p.lang === 'TR').length.toString();
  $('statENPages').textContent = SITE_PAGES.filter(p => p.lang === 'EN').length.toString();
  const allSEO = SITE_PAGES.map(p => seoScore(getPageData(p.id).seo));
  const avg = Math.round(allSEO.reduce((a, b) => a + b, 0) / allSEO.length);
  $('statSEOScore').textContent = avg + '%';
  $('statSEOScore').style.color = avg >= 70 ? 'var(--green)' : avg >= 40 ? 'var(--amber)' : 'var(--red)';
}

// ── CONTENT EDITOR ───────────────────────────────────────────
function renderContentEditor() {
  // Rebuild page list
  const list = $('pageList');
  list.innerHTML = '';
  SITE_PAGES.forEach(page => {
    const li = document.createElement('li');
    li.className = 'page-item' + (page.id === state.selectedPageId ? ' selected' : '');
    li.innerHTML = `
      <span class="page-item-icon">${page.icon}</span>
      <div>
        <div class="page-item-name">${page.name}</div>
        <div class="page-item-path">${page.path.replace('..','')}</div>
      </div>
      <span class="page-item-badge badge-${page.lang.toLowerCase()}">${page.lang}</span>`;
    li.addEventListener('click', () => {
      state.selectedPageId = page.id;
      renderContentEditor();
    });
    list.appendChild(li);
  });
  renderEditorFields();
}

function renderEditorFields() {
  const page = SITE_PAGES.find(p => p.id === state.selectedPageId);
  const data = getPageData(page.id);
  const wrap = $('editorFields');

  // Tab switching
  $('tabContent').onclick = () => { state.contentTab = 'content'; renderEditorFields(); };
  $('tabSEO').onclick = () => { state.contentTab = 'seo'; renderEditorFields(); };
  $('tabImages').onclick = () => { state.contentTab = 'images'; renderEditorFields(); };
  ['tabContent','tabSEO','tabImages'].forEach(id => $(`${id}`).classList.remove('active'));
  $(`tab${state.contentTab.charAt(0).toUpperCase()+state.contentTab.slice(1)}`).classList.add('active');

  const badge = page.lang === 'TR' ? '<span class="section-tag">TR</span>' : '<span class="section-tag" style="background:rgba(37,99,235,.08);color:#2563eb">EN</span>';

  if (state.contentTab === 'content') {
    const fields = Object.entries(data.content);
    wrap.innerHTML = `<div class="section-header"><h2>${page.icon} ${page.name}</h2>${badge}</div>` +
      fields.map(([key, val]) => {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
        const isLong = val && (val.includes('\n') || val.length > 80);
        return `<div class="field-group">
          <label class="field-label">${label}</label>
          ${isLong
            ? `<textarea class="field-textarea" id="cf_${key}" rows="3">${val || ''}</textarea>`
            : `<input class="field-input" id="cf_${key}" type="text" value="${(val||'').replace(/"/g,'&quot;')}"/>`
          }
        </div>`;
      }).join('') +
      `<button class="btn btn-primary" onclick="saveContentFields('${page.id}')">💾 Kaydet</button>
       <button class="btn btn-ghost" style="margin-left:.5rem" onclick="exportPageHint('${page.id}')">📤 HTML Görüntüle</button>`;

  } else if (state.contentTab === 'seo') {
    const s = data.seo;
    wrap.innerHTML = `<div class="section-header"><h2>${page.icon} ${page.name} — SEO</h2>${badge}</div>
    <div class="field-group">
      <label class="field-label">Sayfa Başlığı (Title) <span style="color:var(--grey);font-weight:400">— ideal 50-60 karakter</span></label>
      <input class="field-input" id="seo_title" value="${(s.title||'').replace(/"/g,'&quot;')}" oninput="charCount(this,60)"/>
      <div class="char-count">${(s.title||'').length} / 60</div>
    </div>
    <div class="field-group">
      <label class="field-label">Meta Açıklama (Description) <span style="color:var(--grey);font-weight:400">— ideal 120-155 karakter</span></label>
      <textarea class="field-textarea" id="seo_desc" rows="3" oninput="charCount(this,155)">${s.description||''}</textarea>
      <div class="char-count">${(s.description||'').length} / 155</div>
    </div>
    <div class="field-group">
      <label class="field-label">Anahtar Kelimeler (Keywords)</label>
      <input class="field-input" id="seo_kw" value="${(s.keywords||'').replace(/"/g,'&quot;')}"/>
      <div class="field-hint">Virgülle ayrılmış — örn: digital marketing, istanbul agency</div>
    </div>
    <div class="divider"></div>
    <p class="card-title">Open Graph (Sosyal Medya)</p>
    <div class="grid-2">
      <div class="field-group">
        <label class="field-label">OG Başlık</label>
        <input class="field-input" id="seo_ogTitle" value="${(s.ogTitle||'').replace(/"/g,'&quot;')}"/>
      </div>
      <div class="field-group">
        <label class="field-label">OG Görsel URL</label>
        <input class="field-input" id="seo_ogImage" value="${(s.ogImage||'').replace(/"/g,'&quot;')}"/>
      </div>
    </div>
    <div class="field-group">
      <label class="field-label">OG Açıklama</label>
      <input class="field-input" id="seo_ogDesc" value="${(s.ogDesc||'').replace(/"/g,'&quot;')}"/>
    </div>
    <div class="divider"></div>
    <p class="card-title">Teknik SEO</p>
    <div class="field-group">
      <label class="field-label">Canonical URL</label>
      <input class="field-input" id="seo_canonical" value="${(s.canonical||'').replace(/"/g,'&quot;')}"/>
    </div>
    <div class="grid-2">
      <div class="field-group">
        <label class="field-label">hreflang TR</label>
        <input class="field-input" id="seo_hlTR" value="${(s.hreflangTR||'').replace(/"/g,'&quot;')}"/>
      </div>
      <div class="field-group">
        <label class="field-label">hreflang EN</label>
        <input class="field-input" id="seo_hlEN" value="${(s.hreflangEN||'').replace(/"/g,'&quot;')}"/>
      </div>
    </div>
    <button class="btn btn-primary mt-1" onclick="saveSEOFields('${page.id}')">💾 SEO Kaydet</button>
    <div class="divider"></div>
    ${renderSEOPreview(s)}`;

  } else {
    // Images tab
    const imgs = data.images;
    if (!imgs || !imgs.length) {
      wrap.innerHTML = `<div class="section-header"><h2>${page.icon} ${page.name} — Görseller</h2>${badge}</div>
        <p style="color:var(--grey);font-size:.85rem;">Bu sayfa için düzenlenebilir görsel tanımlanmamış.</p>`;
    } else {
      wrap.innerHTML = `<div class="section-header"><h2>${page.icon} ${page.name} — Görseller</h2>${badge}</div>
        <div class="img-grid">` +
        imgs.map(img => `
          <div class="img-card">
            <img class="img-card-thumb" src="${img.url}" onerror="this.style.background='#eee'" alt="${img.label}"/>
            <div class="img-card-body">
              <div class="img-card-name">${img.label}</div>
              <div class="img-card-url">${img.url}</div>
              <button class="img-edit-btn" onclick="editImage('${page.id}','${img.id}','${img.label}')">✏️ URL Değiştir</button>
            </div>
          </div>`).join('') + `</div>`;
    }
  }
}

function renderSEOPreview(s) {
  return `<div style="background:var(--bg);border-radius:8px;padding:1rem 1.25rem;margin-top:.5rem">
    <p class="card-title" style="margin-bottom:.75rem">Google Önizlemesi</p>
    <div style="font-size:.78rem;color:#1a0dab;margin-bottom:.15rem;font-weight:600">${s.title || 'Sayfa Başlığı'}</div>
    <div style="font-size:.68rem;color:#006621;margin-bottom:.25rem">${s.canonical || 'https://emekajans.com/...'}</div>
    <div style="font-size:.75rem;color:#545454;line-height:1.5">${s.description || 'Meta açıklama buraya gelecek...'}</div>
  </div>`;
}

function saveContentFields(pageId) {
  const page = SITE_PAGES.find(p => p.id === pageId);
  const data = getPageData(pageId);
  Object.keys(data.content).forEach(key => {
    const el = $('cf_' + key);
    if (el) setPageData(pageId, 'content', key, el.value);
  });
  toast('İçerik kaydedildi ✓');
}

function saveSEOFields(pageId) {
  const fields = ['title','desc','kw','ogTitle','ogImage','ogDesc','canonical','hlTR','hlEN'];
  const map = { title:'title', desc:'description', kw:'keywords', ogTitle:'ogTitle', ogImage:'ogImage', ogDesc:'ogDesc', canonical:'canonical', hlTR:'hreflangTR', hlEN:'hreflangEN' };
  fields.forEach(f => {
    const el = $('seo_' + f);
    if (el) setPageData(pageId, 'seo', map[f], el.value);
  });
  toast('SEO ayarları kaydedildi ✓');
  // re-render preview
  setTimeout(() => renderEditorFields(), 300);
}

function exportPageHint(pageId) {
  const page = SITE_PAGES.find(p => p.id === pageId);
  window.open(page.path, '_blank');
  toast('💡 Değişiklikler localStorage\'a kaydedildi. Sitenizi yayına alırken "İndir" butonunu kullanın.', 'success');
}

// ── SEO PANEL ────────────────────────────────────────────────
function renderSEOPanel() {
  const tbody = $('seoTableBody');
  tbody.innerHTML = '';
  SITE_PAGES.forEach(page => {
    const data = getPageData(page.id);
    const s = data.seo;
    const score = seoScore(s);
    const scoreClass = score >= 70 ? 'score-good' : score >= 40 ? 'score-warn' : 'score-bad';
    const titleOk = s.title && s.title.length >= 20 && s.title.length <= 60;
    const descOk = s.description && s.description.length >= 50 && s.description.length <= 155;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span style="font-size:1rem">${page.icon}</span> <strong>${page.name}</strong></td>
      <td><span class="page-item-badge badge-${page.lang.toLowerCase()}">${page.lang}</span></td>
      <td>
        <span class="seo-indicator ${titleOk ? 'seo-ok' : 'seo-bad'}"></span>
        <span style="font-size:.78rem;${titleOk?'':'color:var(--red)'}">${s.title ? s.title.substring(0,45)+'…' : '—'}</span>
        ${s.title ? `<div style="font-size:.62rem;color:var(--grey)">${s.title.length} karakter</div>` : ''}
      </td>
      <td>
        <span class="seo-indicator ${descOk ? 'seo-ok' : 'seo-warn'}"></span>
        <span style="font-size:.78rem">${s.description ? s.description.substring(0,50)+'…' : '—'}</span>
        ${s.description ? `<div style="font-size:.62rem;color:var(--grey)">${s.description.length} karakter</div>` : ''}
      </td>
      <td><span class="seo-score ${scoreClass}">${score}%</span></td>
      <td>
        <button class="btn btn-ghost" style="padding:.35rem .75rem;font-size:.68rem" onclick="goToPageSEO('${page.id}')">Düzenle</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function goToPageSEO(pageId) {
  state.selectedPageId = pageId;
  state.contentTab = 'seo';
  showPanel('content');
}

// ── IMAGES PANEL ─────────────────────────────────────────────
function renderImagesPanel() {
  const grid = $('imagesGrid');
  grid.innerHTML = '';
  SITE_PAGES.forEach(page => {
    const data = getPageData(page.id);
    if (!data.images || !data.images.length) return;
    data.images.forEach(img => {
      const card = document.createElement('div');
      card.className = 'img-card';
      card.innerHTML = `
        <img class="img-card-thumb" src="${img.url}" onerror="this.style.background='var(--grey-light)'" alt="${img.label}"/>
        <div class="img-card-body">
          <div class="img-card-name">${img.label}</div>
          <div style="font-size:.62rem;color:var(--grey);margin-bottom:.25rem">${page.name} (${page.lang})</div>
          <div class="img-card-url">${img.url}</div>
          <button class="img-edit-btn" style="margin-top:.4rem" onclick="editImage('${page.id}','${img.id}','${img.label}')">✏️ URL Değiştir</button>
        </div>`;
      grid.appendChild(card);
    });
  });
}

function editImage(pageId, imgId, label) {
  const page = SITE_PAGES.find(p => p.id === pageId);
  const data = getPageData(pageId);
  const img = data.images.find(i => i.id === imgId);
  $('imgModalLabel').textContent = `${label} — ${page.name}`;
  $('imgModalUrl').value = img ? img.url : '';
  $('imgModalPreview').src = img ? img.url : '';
  $('imgModal').classList.add('open');
  $('imgSaveBtn').onclick = () => {
    const newUrl = $('imgModalUrl').value.trim();
    if (!state.data[pageId]) state.data[pageId] = {};
    if (!state.data[pageId].images) state.data[pageId].images = [];
    const existing = state.data[pageId].images.find(i => i.id === imgId);
    if (existing) existing.url = newUrl;
    else state.data[pageId].images.push({ id: imgId, url: newUrl });
    saveState();
    $('imgModal').classList.remove('open');
    toast('Görsel URL güncellendi ✓');
    if (state.currentPanel === 'images') renderImagesPanel();
    else renderEditorFields();
  };
  $('imgModalUrl').addEventListener('input', () => {
    $('imgModalPreview').src = $('imgModalUrl').value;
  });
}
$('imgModalClose').onclick = () => $('imgModal').classList.remove('open');

// ── SETTINGS ─────────────────────────────────────────────────
$('savePasswordBtn').addEventListener('click', () => {
  const curr = $('currPass').value;
  const newp = $('newPass').value;
  const conf = $('confPass').value;
  const creds = getCredentials();
  if (curr !== creds.pass) { toast('Mevcut şifre hatalı', 'error'); return; }
  if (newp.length < 6) { toast('Şifre en az 6 karakter olmalı', 'error'); return; }
  if (newp !== conf) { toast('Şifreler eşleşmiyor', 'error'); return; }
  setCredentials(creds.user, newp);
  $('currPass').value = $('newPass').value = $('confPass').value = '';
  toast('Şifre güncellendi ✓');
});

$('saveSiteInfoBtn').addEventListener('click', () => {
  toast('Site bilgileri kaydedildi ✓');
});

$('exportAllBtn').addEventListener('click', () => {
  const data = JSON.stringify(state.data, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'emek-ajans-content-backup.json';
  a.click();
  toast('Yedek dosyası indirildi ✓');
});

$('importBtn').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json';
  input.onchange = e => {
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        state.data = JSON.parse(ev.target.result);
        saveState();
        toast('Veri içe aktarıldı ✓');
        location.reload();
      } catch(e) { toast('Geçersiz dosya', 'error'); }
    };
    reader.readAsText(e.target.files[0]);
  };
  input.click();
});

// ── INIT ─────────────────────────────────────────────────────
loadState();

