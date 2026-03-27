(function () {
  var page = document.body.getAttribute('data-page') || '';
  var dataRoot = document.documentElement.getAttribute('data-root') || '';

  /**
   * GitHub project Pages: site lives at https://user.github.io/REPO/ (e.g. /noahu/).
   * Custom domain (CNAME): served from / so paths are root-relative without the repo segment.
   * Nav links must be absolute from host root so they work from /REPO/blog/... on github.io
   * and from /blog/... on the apex domain.
   */
  /** Must match GitHub repo name for project Pages at user.github.io/REPO/ */
  var GITHUB_PAGES_REPO = 'noahu';

  function pathPrefix() {
    if (location.protocol === 'file:') return null;
    var host = location.hostname;
    var path = location.pathname;
    if (!host.endsWith('github.io')) return '';
    var base = '/' + GITHUB_PAGES_REPO;
    if (path === base || path.startsWith(base + '/')) {
      return base;
    }
    return '';
  }

  /** e.g. blog/index.html -> /noahu/blog/index.html or /blog/index.html */
  function absFromSiteRoot(rel) {
    rel = rel.replace(/^\/+/, '');
    var prefix = pathPrefix();
    if (prefix === null) {
      return dataRoot + rel;
    }
    return prefix ? prefix + '/' + rel : '/' + rel;
  }

  function navHtml() {
    return (
      '<nav><ul>' +
      '<li><a href="' + absFromSiteRoot('index.html') + '" data-nav="home">Noah Ullman</a></li>' +
      '<li><a href="' + absFromSiteRoot('projects.html') + '" data-nav="projects">Projects</a></li>' +
      '<li><a href="' + absFromSiteRoot('blog/index.html') + '" data-nav="blog">Blog</a></li>' +
      '<li><a href="' + absFromSiteRoot('reading.html') + '" data-nav="reading">Reading</a></li>' +
      '<li><a href="mailto:noah.u22@gmail.com" class="contact-link">Contact</a></li>' +
      '</ul></nav>'
    );
  }

  function footerHtml() {
    return (
      '<footer>' +
      '<p>Boston, MA &nbsp;·&nbsp; Actually Health &nbsp;·&nbsp; Abyssinia Bio</p>' +
      '<a href="mailto:noah.u22@gmail.com">noah.u22@gmail.com</a>' +
      '</footer>'
    );
  }

  var navEl = document.getElementById('site-nav');
  var footerEl = document.getElementById('site-footer');
  if (navEl) {
    navEl.innerHTML = navHtml();
    navEl.querySelectorAll('[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === page) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }
  if (footerEl) {
    footerEl.innerHTML = footerHtml();
  }
})();
