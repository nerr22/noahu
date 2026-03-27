# noahu

Static personal site (no build step).

| Path | What |
|------|------|
| `index.html` | Home — intro only |
| `projects.html` | Work & projects |
| `reading.html` | Reading list |
| `blog/` | Blog index + posts |
| `css/site.css` | Shared styles |
| `js/site.js` | Shared nav + footer (edit links in one place) |

## Local preview

Serve the repo root (needed for shared CSS/JS paths):

```bash
python3 -m http.server 3000
```

Then open [http://localhost:3000](http://localhost:3000).

## Blog posts

See [blog/README.md](blog/README.md).

## Deploy

GitHub Actions copies `css/`, `js/`, `blog/`, HTML, `favicon.ico`, and `CNAME` to Pages on pushes to `main`.
