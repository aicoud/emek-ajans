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
    let filename = window.location.pathname.split('/').pop() || 'index.html';
    
    // Special mapping for Policy and Blog pages
    if (filename === 'cerez-politikasi.html' && lang === 'en') {
      filename = 'cookie-policy.html';
    } else if (filename === 'cookie-policy.html' && lang === 'tr') {
      filename = 'cerez-politikasi.html';
    } else if (filename === 'blog-detay.html' && lang === 'en') {
      filename = 'blog-detail.html';
    } else if (filename === 'blog-detail.html' && lang === 'tr') {
      filename = 'blog-detay.html';
    }

    const search = window.location.search;
    if (lang === 'en' && !isEN) {
      window.location.href = 'en/' + filename + search;
    } else if (lang === 'tr' && isEN) {
      window.location.href = '../' + filename + search;
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
