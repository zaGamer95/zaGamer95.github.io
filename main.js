/* ============================================================
   Page behaviour: theme, language, and the project shelf.
   Content lives in i18n.js and projects.js — you should not
   need to touch this file to add work or fix wording.
   ============================================================ */

(function () {
  'use strict';

  var root = document.documentElement;

  /* ── theme ────────────────────────────────────────────── */

  var themeBtn = document.getElementById('theme-toggle');

  function currentTheme() {
    if (root.dataset.theme === 'dark' || root.dataset.theme === 'light') return root.dataset.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ── language ─────────────────────────────────────────── */

  var CODES = LANGS.map(function (l) { return l.code; });
  var lang = 'en';

  /* Explicit choice wins: ?lang= in the URL, then a previous
     visit's choice, then the browser's own preference. */
  function resolveLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && CODES.indexOf(q) > -1) return q;

    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved && CODES.indexOf(saved) > -1) return saved;

    var prefs = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < prefs.length; i++) {
      var base = String(prefs[i]).toLowerCase().split('-')[0];
      if (CODES.indexOf(base) > -1) return base;
    }
    return 'en';
  }

  /* Falls back to English so a missing key shows real words. */
  function t(key) {
    var table = I18N[lang] || {};
    if (key in table) return table[key];
    return (I18N.en && I18N.en[key]) || '';
  }

  function pick(value) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[lang] || value.en || '';
  }

  function applyStaticText() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-html'));
      if (v) el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-tags]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-tags'));
      if (!v) return;
      el.innerHTML = '';
      v.split(',').forEach(function (label) {
        var span = document.createElement('span');
        span.className = 'tag';
        span.textContent = label.trim();
        el.appendChild(span);
      });
    });

    /* data-i18n-attr="aria-label:some.key" */
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length !== 2) return;
        var v = t(bits[1].trim());
        if (v) el.setAttribute(bits[0].trim(), v);
      });
    });

    var meta = document.querySelector('meta[name="description"]');
    if (meta && t('meta.description')) meta.setAttribute('content', t('meta.description'));
    if (t('meta.title')) document.title = t('meta.title');
  }

  function setLang(code, remember) {
    if (CODES.indexOf(code) === -1) code = 'en';
    lang = code;

    var def = LANGS.filter(function (l) { return l.code === code; })[0];
    root.setAttribute('lang', def ? def.htmlLang : code);

    if (remember) {
      try { localStorage.setItem('lang', code); } catch (e) {}
      var url = new URL(location.href);
      if (code === 'en') url.searchParams.delete('lang');
      else url.searchParams.set('lang', code);
      history.replaceState(null, '', url);
    }

    applyStaticText();
    buildLangMenu();
    buildFilters();   /* filter labels are translated too */
    render();
  }

  /* ── language menu ────────────────────────────────────── */

  var langBtn = document.getElementById('lang-btn');
  var langMenu = document.getElementById('lang-menu');

  function buildLangMenu() {
    if (!langMenu) return;
    langMenu.innerHTML = '';
    LANGS.forEach(function (l) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'lang-option';
      b.setAttribute('role', 'menuitemradio');
      b.setAttribute('aria-checked', l.code === lang ? 'true' : 'false');
      b.setAttribute('lang', l.htmlLang);
      b.textContent = l.label;
      b.addEventListener('click', function () {
        setLang(l.code, true);
        closeMenu();
        langBtn.focus();
      });
      li.appendChild(b);
      langMenu.appendChild(li);
    });
  }

  function openMenu() {
    if (!langMenu) return;
    langMenu.hidden = false;
    langBtn.setAttribute('aria-expanded', 'true');
    var first = langMenu.querySelector('[aria-checked="true"]') || langMenu.querySelector('button');
    if (first) first.focus();
  }

  function closeMenu() {
    if (!langMenu) return;
    langMenu.hidden = true;
    langBtn.setAttribute('aria-expanded', 'false');
  }

  if (langBtn) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (langMenu.hidden) openMenu(); else closeMenu();
    });
    document.addEventListener('click', function (e) {
      if (langMenu && !langMenu.hidden && !langMenu.contains(e.target) && e.target !== langBtn) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && langMenu && !langMenu.hidden) { closeMenu(); langBtn.focus(); }
    });
  }

  /* ── small bits ───────────────────────────────────────── */

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Assembled at runtime so the address is not sitting in the
     HTML source for scrapers. */
  var mailUser = 'wonbo123', mailHost = 'gmail.com';
  var emailLink = document.getElementById('email-link');
  var emailText = document.getElementById('email-text');
  if (emailLink && emailText) {
    emailLink.href = 'mailto:' + mailUser + '@' + mailHost;
    emailText.textContent = mailUser + '@' + mailHost;
  }

  /* ── project shelf ────────────────────────────────────── */

  var CATEGORIES = ['professional', 'academic', 'personal'];
  var VISIBLE_BY_DEFAULT = 6;

  var grid = document.getElementById('project-grid');
  var filterBar = document.getElementById('filters');
  var note = document.getElementById('filter-note');
  var moreWrap = document.getElementById('more-wrap');
  var moreBtn = document.getElementById('more-btn');

  var all = (typeof PROJECTS !== 'undefined' && Array.isArray(PROJECTS)) ? PROJECTS.slice() : [];
  var active = 'all';
  var expanded = false;

  /* Featured items float up; everything else keeps its order in projects.js. */
  all.sort(function (a, b) { return (b.featured === true) - (a.featured === true); });

  function countIn(id) {
    if (id === 'all') return all.length;
    return all.filter(function (p) { return p.category === id; }).length;
  }

  function buildFilters() {
    if (!filterBar) return;
    filterBar.innerHTML = '';
    ['all'].concat(CATEGORIES).forEach(function (id) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter';
      btn.dataset.filter = id;
      btn.setAttribute('aria-pressed', id === active ? 'true' : 'false');
      btn.appendChild(document.createTextNode(t('filter.' + id)));

      var count = document.createElement('span');
      count.className = 'count';
      count.textContent = String(countIn(id));
      btn.appendChild(count);

      btn.addEventListener('click', function () {
        active = id;
        expanded = false;
        Array.prototype.forEach.call(filterBar.children, function (el) {
          el.setAttribute('aria-pressed', el.dataset.filter === active ? 'true' : 'false');
        });
        render();
      });
      filterBar.appendChild(btn);
    });
  }

  function makeCard(p) {
    var card = document.createElement('article');
    card.className = 'card';

    var top = document.createElement('div');
    top.className = 'card-top';

    var pill = document.createElement('span');
    pill.className = 'pill';
    pill.dataset.cat = p.category;
    pill.textContent = t('filter.' + p.category);
    top.appendChild(pill);

    if (p.year) {
      var year = document.createElement('span');
      year.className = 'card-year';
      year.textContent = p.year;
      top.appendChild(year);
    }
    card.appendChild(top);

    var title = pick(p.title);
    var h3 = document.createElement('h3');
    var primary = (p.links || [])[0];
    if (primary) {
      var a = document.createElement('a');
      a.href = primary.href;
      a.textContent = title;
      if (primary.external) { a.target = '_blank'; a.rel = 'noopener'; }
      h3.appendChild(a);
    } else {
      h3.textContent = title;
    }
    card.appendChild(h3);

    var blurb = document.createElement('p');
    blurb.className = 'card-blurb';
    blurb.textContent = pick(p.blurb);
    card.appendChild(blurb);

    if (p.tags && p.tags.length) {
      var tags = document.createElement('div');
      tags.className = 'card-tags';
      p.tags.forEach(function (label) {
        var span = document.createElement('span');
        span.className = 'tag';
        span.textContent = label;
        tags.appendChild(span);
      });
      card.appendChild(tags);
    }

    if (p.links && p.links.length) {
      var links = document.createElement('div');
      links.className = 'card-links';
      p.links.forEach(function (l) {
        var link = document.createElement('a');
        link.href = l.href;
        link.textContent = pick(LINK_LABELS[l.label]) || l.label;
        if (l.external) { link.target = '_blank'; link.rel = 'noopener'; link.dataset.external = 'true'; }
        links.appendChild(link);
      });
      card.appendChild(links);
    } else if (p.status) {
      var status = document.createElement('p');
      status.className = 'card-status';
      status.textContent = pick(p.status);
      card.appendChild(status);
    }

    return card;
  }

  function render() {
    if (!grid) return;

    var list = active === 'all'
      ? all
      : all.filter(function (p) { return p.category === active; });

    grid.innerHTML = '';

    if (note) {
      var n = active === 'all' ? '' : t('note.' + active);
      note.textContent = n;
      note.hidden = !n;
    }

    if (!list.length) {
      var empty = document.createElement('p');
      empty.className = 'grid-empty';
      empty.textContent = t('empty.' + active) || t('empty.default');
      grid.appendChild(empty);
      if (moreWrap) moreWrap.hidden = true;
      return;
    }

    var shown = expanded ? list : list.slice(0, VISIBLE_BY_DEFAULT);
    shown.forEach(function (p) { grid.appendChild(makeCard(p)); });

    var hiddenCount = list.length - shown.length;
    if (moreWrap && moreBtn) {
      if (hiddenCount > 0) {
        moreWrap.hidden = false;
        moreBtn.textContent = t('more.show').replace('{n}', hiddenCount);
        moreBtn.setAttribute('aria-expanded', 'false');
      } else if (expanded && list.length > VISIBLE_BY_DEFAULT) {
        moreWrap.hidden = false;
        moreBtn.textContent = t('more.fewer');
        moreBtn.setAttribute('aria-expanded', 'true');
      } else {
        moreWrap.hidden = true;
      }
    }
  }

  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      expanded = !expanded;
      render();
      if (!expanded) document.getElementById('projects').scrollIntoView({ block: 'start' });
    });
  }

  setLang(resolveLang(), false);
})();
