document.addEventListener('DOMContentLoaded', function() {

  const path    = window.location.pathname;
  const inPages = path.includes('/pages/');
  const root    = inPages ? '../' : './';

  // Build links based on whether we're in pages/ or at root
  const home  = root + 'index.html';
  const about = inPages ? 'about.html'        : 'pages/about.html';
  const acts  = inPages ? 'activities.html'   : 'pages/activities.html';
  const tp    = inPages ? 'twin-pines.html'   : 'pages/twin-pines.html';
  const faq   = inPages ? 'faq.html'          : 'pages/faq.html';
  const cont  = inPages ? 'contact.html'      : 'pages/contact.html';
  const reg   = inPages ? 'registration.html' : 'pages/registration.html';

  // Active page detection
  const isHome       = !inPages && (path.endsWith('index.html') || path.endsWith('/') || path.endsWith('/coop--camp/'));
  const isAbout      = path.includes('about');
  const isActivities = path.includes('activities');
  const isTwinPines  = path.includes('twin-pines');
  const isFaq        = path.includes('faq');
  const isContact    = path.includes('contact');
  const isReg        = path.includes('registration');

  const a = (href, label, active) =>
    `<li><a href="${href}"${active ? ' class="active"' : ''}>${label}</a></li>`;

  // Inject favicon
  const faviconTags = [
    { rel: 'icon',             type: 'image/x-icon', href: root + 'images/favicons/favicon.ico' },
    { rel: 'icon',             type: 'image/png',    href: root + 'images/favicons/favicon-32x32.png',          sizes: '32x32' },
    { rel: 'icon',             type: 'image/png',    href: root + 'images/favicons/favicon-16x16.png',          sizes: '16x16' },
    { rel: 'apple-touch-icon', type: 'image/png',    href: root + 'images/favicons/apple-touch-icon.png',       sizes: '180x180' },
    { rel: 'icon',             type: 'image/png',    href: root + 'images/favicons/android-chrome-192x192.png', sizes: '192x192' },
    { rel: 'icon',             type: 'image/png',    href: root + 'images/favicons/android-chrome-512x512.png', sizes: '512x512' },
  ];
  faviconTags.forEach(function(tag) {
    const link = document.createElement('link');
    link.rel  = tag.rel;
    link.type = tag.type;
    link.href = tag.href;
    if (tag.sizes) link.sizes = tag.sizes;
    document.head.appendChild(link);
  });

  // Inject Open Graph tags
  const pageTitle = document.body.getAttribute('data-title') || 'Co-op Camp Sierra';
  const ogTitle   = pageTitle === 'Co-op Camp Sierra'
    ? 'Co-op Camp Sierra'
    : pageTitle + ' | Co-op Camp Sierra';

  const ogTags = [
    { property: 'og:title',       content: ogTitle },
    { property: 'og:description', content: 'A cooperative family camp in the Sierra Nevada since 1938. Join us ' + CAMP_DATES + '.' },
    { property: 'og:image',       content: 'https://www.coopcamp.com/images/carnival.jpeg' },
    { property: 'og:url',         content: 'https://www.coopcamp.com' },
    { property: 'og:type',        content: 'website' },
  ];
  ogTags.forEach(function(tag) {
    const meta = document.createElement('meta');
    meta.setAttribute('property', tag.property);
    meta.setAttribute('content', tag.content);
    document.head.appendChild(meta);
  });

  // ---- NAV ----
  const navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.innerHTML = `
      <nav class="site-nav" role="navigation" aria-label="Main navigation">
        <a class="nav-logo" href="${home}">Co-op Camp Sierra</a>
        <button class="nav-toggle" aria-label="Toggle menu"
                onclick="document.querySelector('.nav-links').classList.toggle('open')">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links">
          ${a(home,  'Home',       isHome)}
          ${a(about, 'About',      isAbout)}
          ${a(acts,  'Activities', isActivities)}
          ${a(tp,    'Twin Pines', isTwinPines)}
          ${a(faq,   'FAQ',        isFaq)}
          ${a(cont,  'Reach Us',   isContact)}
          <li><a href="${reg}"${REGISTRATION_OPEN ? ' class="nav-cta"' : ''}>${REGISTRATION_OPEN ? 'Register' : 'Register'}</a></li>
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
          <a href="${home}">Home</a>
          <a href="${about}">About</a>
          <a href="${acts}">Activities</a>
          <a href="${tp}">Twin Pines</a>
          <a href="${faq}">FAQ</a>
          <a href="${reg}">Registration</a>
          <a href="${cont}">Reach Us</a>
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
