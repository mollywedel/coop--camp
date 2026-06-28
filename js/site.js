document.addEventListener('DOMContentLoaded', function() {

  const inPages = window.location.pathname.includes('/pages/');
  const root    = inPages ? '../' : './';
  const pages   = inPages ? ''    : 'pages/';

  // ---- NAV ----
  const navEl = document.getElementById('site-nav');
  if (navEl) {
    const path         = window.location.pathname;
    const isHome       = path.endsWith('index.html') || path.endsWith('/');
    const isAbout      = path.includes('about');
    const isActivities = path.includes('activities');
    const isTwinPines  = path.includes('twin-pines');
    const isFaq        = path.includes('faq');
    const isContact    = path.includes('contact');

    const a = (href, label, active) =>
      `<li><a href="${href}"${active ? ' class="active"' : ''}>${label}</a></li>`;

    const regClass = REGISTRATION_OPEN ? 'class="nav-cta"' : '';

    navEl.innerHTML = `
      <nav class="site-nav" role="navigation" aria-label="Main navigation">
        <a class="nav-logo" href="${root}index.html">Co-op Camp Sierra</a>
        <button class="nav-toggle" aria-label="Toggle menu"
                onclick="document.querySelector('.nav-links').classList.toggle('open')">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          ${a(root + 'index.html',              'Home',       isHome)}
          ${a(root + pages + 'about.html',      'About',      isAbout)}
          ${a(root + pages + 'activities.html', 'Activities', isActivities)}
          ${a(root + pages + 'twin-pines.html', 'Twin Pines', isTwinPines)}
          ${a(root + pages + 'faq.html',        'FAQ',        isFaq)}
          ${a(root + pages + 'contact.html',    'Reach Us',   isContact)}
          <li><a href="${root}${pages}registration.html" ${regClass}>Register</a></li>
        </ul>
      </nav>`;
  }

  // ---- FOOTER ----
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="site-footer">
        <span class="footer-logo">Co-op Camp Sierra</span>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="${root}index.html">Home</a>
          <a href="${root}${pages}about.html">About</a>
          <a href="${root}${pages}activities.html">Activities</a>
          <a href="${root}${pages}twin-pines.html">Twin Pines</a>
          <a href="${root}${pages}faq.html">FAQ</a>
          <a href="${root}${pages}registration.html">Registration</a>
          <a href="${root}${pages}contact.html">Reach Us</a>
        </nav>
        <div class="social-links" style="justify-content:center; margin-bottom:1.25rem;">
          <a href="http://www.facebook.com/groups/51711487635/" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.instagram.com/coopcampsierra/" target="_blank" rel="noopener">Instagram</a>
          <a href="http://www.youtube.com/channel/UCi2rjF8sjHXyjd9L-mYlB8A" target="_blank" rel="noopener">YouTube</a>
          <a href="https://twitter.com/coopCampSierra" target="_blank" rel="noopener">Twitter</a>
        </div>
        <p>
          <a href="${CAMP_PHONE_LINK}">${CAMP_PHONE}</a> &nbsp;·&nbsp;
          <a href="mailto:${CAMP_EMAIL}">${CAMP_EMAIL}</a>
        </p>
        <p style="margin-top:0.75rem; color:#4a4060;">
          ${CAMP_ADDRESS} &nbsp;·&nbsp; © ${new Date().getFullYear()} Co-op Camp Sierra
        </p>
      </footer>`;
  }

});