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

## Working on it locally

Open `index.html` in a browser. That is genuinely it. If you want a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
