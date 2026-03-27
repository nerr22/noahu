# Adding a blog post

1. Copy `example-post.html` to a new filename, e.g. `my-topic.html` (use a slug; keep `.html`).
2. Edit the `<title>`, `<h1>`, `.byline` date, and the `.prose` body (plain HTML).
3. On `index.html` in this folder, duplicate a `<li>` block inside `#post-list` and point the link to your new file. Put newest posts at the top of the list.

Nav and footer are shared from `js/site.js` on every page; styles live in `css/site.css`.
