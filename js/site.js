(function () {
  var root = document.documentElement.getAttribute('data-root') || '';
  var page = document.body.getAttribute('data-page') || '';

  function navHtml() {
    var r = root;
    return (
      '<nav><ul>' +
      '<li><a href="' + r + 'index.html" data-nav="home">Noah Ullman</a></li>' +
      '<li><a href="' + r + 'projects.html" data-nav="projects">Projects</a></li>' +
      '<li><a href="' + r + 'blog/index.html" data-nav="blog">Blog</a></li>' +
      '<li><a href="' + r + 'reading.html" data-nav="reading">Reading</a></li>' +
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
