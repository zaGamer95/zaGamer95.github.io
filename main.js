/* ============================================================
   Page behaviour: theme toggle, email obfuscation, project shelf.
   Project content lives in projects.js — you should not need to
   touch this file to add work.
   ============================================================ */

(function () {
  'use strict';

  /* ── theme toggle ─────────────────────────────────────── */

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function currentTheme() {
    if (root.dataset.theme === 'dark' || root.dataset.theme === 'light') {
      return root.dataset.theme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ── small bits ───────────────────────────────────────── */

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Assembled at runtime so the address is not sitting in the
     HTML source for scrapers. Falls back to the "[at]" text. */
  var mailUser = 'wonbo123';
  var mailHost = 'gmail.com';
  var emailLink = document.getElementById('email-link');
  var emailText = document.getElementById('email-text');
  if (emailLink && emailText) {
    emailLink.href = 'mailto:' + mailUser + '@' + mailHost;
    emailText.textContent = mailUser + '@' + mailHost;
  }

  /* ── project shelf ────────────────────────────────────── */

  var CATEGORIES = [
    {
      id: 'professional',
      label: 'Professional',
      note: 'Applied work — the projects I would put in front of a hiring manager.',
      empty: 'Nothing filed here yet.'
    },
    {
      id: 'academic',
      label: 'Academic',
      note: 'Research and coursework from the MSc in Biomedical Informatics.',
      empty: 'Coursework and research from the NUS programme will land here as it finishes.'
    },
    {
      id: 'personal',
      label: 'Personal',
      note: 'Built for my own use, shared because they turned out worth sharing.',
      empty: 'Nothing filed here yet.'
    }
  ];

  var VISIBLE_BY_DEFAULT = 6;

  var grid = document.getElementById('project-grid');
  var filterBar = document.getElementById('filters');
  var note = document.getElementById('filter-note');
  var moreWrap = document.getElementById('more-wrap');
  var moreBtn = document.getElementById('more-btn');

  var all = (typeof PROJECTS !== 'undefined' && Array.isArray(PROJECTS)) ? PROJECTS.slice() : [];
  var active = 'all';
  var expanded = false;

  /* Featured items float to the top; everything else keeps the
     order it has in projects.js. */
  all.sort(function (a, b) {
    return (b.featured === true) - (a.featured === true);
  });

  function countIn(id) {
    if (id === 'all') return all.length;
    return all.filter(function (p) { return p.category === id; }).length;
  }

  function buildFilters() {
    if (!filterBar) return;
    var defs = [{ id: 'all', label: 'All' }].concat(CATEGORIES);

    defs.forEach(function (def) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter';
      btn.dataset.filter = def.id;
      btn.setAttribute('aria-pressed', def.id === active ? 'true' : 'false');

      btn.appendChild(document.createTextNode(def.label));

      var count = document.createElement('span');
      count.className = 'count';
      count.textContent = String(countIn(def.id));
      btn.appendChild(count);

      btn.addEventListener('click', function () {
        active = def.id;
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
    var meta = CATEGORIES.filter(function (c) { return c.id === p.category; })[0];
    pill.textContent = meta ? meta.label : p.category;
    top.appendChild(pill);

    if (p.year) {
      var year = document.createElement('span');
      year.className = 'card-year';
      year.textContent = p.year;
      top.appendChild(year);
    }
    card.appendChild(top);

    var h3 = document.createElement('h3');
    var primary = (p.links || [])[0];
    if (primary) {
      var titleLink = document.createElement('a');
      titleLink.href = primary.href;
      titleLink.textContent = p.title;
      if (primary.external) { titleLink.target = '_blank'; titleLink.rel = 'noopener'; }
      h3.appendChild(titleLink);
    } else {
      h3.textContent = p.title;
    }
    card.appendChild(h3);

    var blurb = document.createElement('p');
    blurb.className = 'card-blurb';
    blurb.textContent = p.blurb || '';
    card.appendChild(blurb);

    if (p.tags && p.tags.length) {
      var tags = document.createElement('div');
      tags.className = 'card-tags';
      p.tags.forEach(function (t) {
        var tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = t;
        tags.appendChild(tag);
      });
      card.appendChild(tags);
    }

    if (p.links && p.links.length) {
      var links = document.createElement('div');
      links.className = 'card-links';
      p.links.forEach(function (l) {
        var a = document.createElement('a');
        a.href = l.href;
        a.textContent = l.label;
        if (l.external) {
          a.target = '_blank';
          a.rel = 'noopener';
          a.dataset.external = 'true';
        }
        links.appendChild(a);
      });
      card.appendChild(links);
    } else if (p.status) {
      var status = document.createElement('p');
      status.className = 'card-status';
      status.textContent = p.status;
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
      var meta = CATEGORIES.filter(function (c) { return c.id === active; })[0];
      note.textContent = meta ? meta.note : '';
      note.hidden = !meta;
    }

    if (!list.length) {
      var metaEmpty = CATEGORIES.filter(function (c) { return c.id === active; })[0];
      var empty = document.createElement('p');
      empty.className = 'grid-empty';
      empty.textContent = metaEmpty ? metaEmpty.empty : 'Nothing here yet.';
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
        moreBtn.textContent = 'Show ' + hiddenCount + ' more';
        moreBtn.setAttribute('aria-expanded', 'false');
      } else if (expanded && list.length > VISIBLE_BY_DEFAULT) {
        moreWrap.hidden = false;
        moreBtn.textContent = 'Show fewer';
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
      if (!expanded) {
        document.getElementById('projects').scrollIntoView({ block: 'start' });
      }
    });
  }

  buildFilters();
  render();
})();
