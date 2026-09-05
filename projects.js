/* ============================================================
   Project shelf data.
   ------------------------------------------------------------
   ADD A PROJECT: copy a block, paste it at the TOP of the list,
   fill it in. Nothing else needs to change — the page builds the
   cards, the filters and the counts from this array.

   category  'professional' | 'academic' | 'personal'
             professional -> what recruiters should see first
             academic     -> NUS / research / coursework
             personal     -> built for fun; still fair game to show

   featured  true  -> visible immediately on page load
             false -> tucked behind the "Show all" button

   links     [] is fine. Cards with no links show `status` instead.
   ============================================================ */

const PROJECTS = [
  {
    title: 'tefoma — Terraforming Mars guide',
    year: '2026',
    category: 'personal',
    featured: true,
    blurb:
      'A living strategy reference for a board game I play too much: card ratings, ' +
      'corporation difficulty, and per-player-count rules. Built as a React + TypeScript ' +
      'single-page app, content-driven from Markdown and JSON so anyone can propose an ' +
      'edit through a GitHub pull request without touching code.',
    tags: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    links: [
      { label: 'Visit the site', href: 'https://wonbo.site/tefoma/', external: true },
      { label: 'Source', href: 'https://github.com/zaGamer95/tefoma', external: true },
    ],
  },
  {
    title: 'Customer shopping trends analysis',
    year: '2025',
    category: 'professional',
    featured: true,
    blurb:
      'Exploratory analysis of a public retail dataset — segmenting customers by ' +
      'spend, category preference and season, then pulling the same cuts in SQL to ' +
      'sanity-check the notebook. A compact end-to-end look at how I go from raw ' +
      'table to a claim I am willing to defend.',
    tags: ['Python', 'pandas', 'SQL', 'Jupyter'],
    links: [
      { label: 'Notebook & queries', href: 'https://github.com/zaGamer95/portfolio1', external: true },
    ],
  },
  {
    title: 'Argo — AI onboarding assistant',
    year: '2024',
    category: 'professional',
    featured: true,
    blurb:
      'Capstone for the KT AIVLE School AI track, where I led the project team. A chatbot that ' +
      'absorbed the repetitive half of HR onboarding Q&A using the GPT API and BERT, ' +
      'with KNN and Random Forest models classifying user behaviour to personalise ' +
      'training paths. Cut onboarding time by roughly a quarter.',
    tags: ['GPT API', 'BERT', 'scikit-learn', 'Agile'],
    links: [],
    status: 'Private repository — happy to walk through it on request.',
  },
];
