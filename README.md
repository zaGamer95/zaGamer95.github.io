# wonbo.site

My personal landing page — [wonbo.site](https://wonbo.site). Plain HTML, CSS and
JavaScript served by GitHub Pages. No build step, no dependencies, nothing to install.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole page: hero, about, experience, projects, contact |
| `projects.js` | **Project data.** The only file you need to touch to add work |
| `main.js` | Theme toggle, email assembly, project filtering |
| `style.css` | All styling, including the dark theme |
| `cv.html` | The CV — single source of truth for its content |
| `cv.css` | CV styling, including the `@media print` rules that make the PDF |
| `cv.pdf` | Generated from `cv.html`. **Do not edit by hand** |
| `make-cv-pdf.sh` | Regenerates `cv.pdf` from `cv.html` |
| `404.html` | Custom not-found page |
| `about.html` | Redirect to `/#about`, kept so old links don't break |
| `CNAME` | Points the Pages build at `wonbo.site`. **Do not delete.** |

## Adding a project

Open [`projects.js`](projects.js), copy an existing block, and paste it at the **top**
of the `PROJECTS` array:

```js
{
  title: 'Project name',
  year: '2026',
  category: 'academic',        // 'professional' | 'academic' | 'personal'
  featured: true,              // true = visible on load, false = behind "Show more"
  blurb: 'Two or three sentences on what it is and why it was worth building.',
  tags: ['Python', 'PyTorch'],
  links: [
    { label: 'Visit the site', href: 'https://wonbo.site/thing/', external: true },
    { label: 'Source', href: 'https://github.com/zaGamer95/thing', external: true },
  ],
},
```

The filter buttons, the counts and the "Show more" threshold all derive from this
array — nothing else needs editing. A project with an empty `links: []` shows its
`status` string instead, which is how private repos are handled.

Six projects show on load; the rest sit behind **Show more**. Change
`VISIBLE_BY_DEFAULT` in `main.js` to adjust.

## The categories

Three, because the work faces three different audiences:

- **professional** — what a hiring manager should see
- **academic** — NUS coursework and research
- **personal** — built for myself, shared anyway

## Sub-pages at `wonbo.site/<name>`

Because the custom domain is attached to this user site, **any other repo of mine
with Pages enabled is served at `wonbo.site/<repo-name>`**. `wonbo.site/tefoma`
works that way — it lives in [zaGamer95/tefoma](https://github.com/zaGamer95/tefoma),
not in this repo.

So a new side project is: make the repo, enable Pages on it, done. It is reachable
immediately at `wonbo.site/<repo>` whether or not it is listed here. Add it to
`projects.js` when it is ready to be seen; leave it out and it stays effectively
unlisted — reachable only by someone who knows the URL. Nothing in this repo links
to or indexes it.

Note this is unlisted, not private. Don't put anything genuinely sensitive on a
public Pages site.

## Updating the CV

Edit [`cv.html`](cv.html) — it is the only copy of the content. Then regenerate
the PDF and commit both together:

```bash
./make-cv-pdf.sh
```

That drives headless Chrome over `cv.html` and writes `cv.pdf`. **If you edit the
CV and skip this step, the Download PDF button serves a stale document** while the
web page shows the new one. The Print button on the page is always current, since
it prints the live page.

The print layout is tuned to land on two A4 pages. After a substantial edit, check
the page count:

```bash
python3 -c "from pypdf import PdfReader; print(len(PdfReader('cv.pdf').pages), 'pages')"
```

If it spills onto a third page, the knobs are in the `@media print` block at the
bottom of [`cv.css`](cv.css) — `body` font-size, `.cv-section` margin, and
`.cv-entry` margin, in that order of effect.

Two things are deliberately absent from the CV: a phone number, and any account
of the Feb 2024 to Feb 2025 gap. Both are noted in `cv.html` comments.

## Working on it locally

Open `index.html` in a browser. That is genuinely it. If you want a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
