// ============================================================
// CO-OP CAMP SIERRA — SITE CONFIG
// Edit this file to update site-wide settings
// ============================================================

// Registration toggle: true = open, false = closed
const REGISTRATION_OPEN = false;

// Camp dates and year
const CAMP_DATES       = 'June 19–26, 2027';
const CAMP_YEAR        = 2027;
const CAMP_YEAR_NUMBER = '89th';

// Contact
const CAMP_PHONE      = '(510) 595-0873';
const CAMP_PHONE_LINK = 'tel:5105950873';
const CAMP_EMAIL      = 'coopcamp1939@gmail.com';
const CAMP_ADDRESS    = '52050 Huntington Lake Road, Big Creek, CA 93605';

// Auto-load site.js from the same js/ folder
(function() {
  const me = Array.from(document.querySelectorAll('script[src]'))
                  .find(s => s.src.includes('config.js'));
  const siteScript = document.createElement('script');
  siteScript.src = me.src.replace('config.js', 'site.js');
  document.head.appendChild(siteScript);
})();