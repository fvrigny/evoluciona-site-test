/* ─── EVOLUCIONA — SHARED COMPONENTS ─────────────────── */

const NAV_HTML = `
<nav>
  <div class="nav-left">
    <a class="nav-logo" href="index.html"><img src="assets/svg/logo.svg" alt="Evoluciona" /></a>
  </div>
  <div class="nav-links-main">
    <a href="index.html">Accueil</a>
    <a href="services.html">Services</a>
    <a href="actualites.html">Actualités</a>
    <a href="carrieres.html">Carrières</a>
    <a href="contact.html">Contact</a>
  </div>
  <div class="nav-right">
    <span class="nav-badge">an <strong>Intelcia</strong> Brand</span>
    <span class="nav-lang">EN ▾</span>
    <a href="contact.html" class="btn-nav-cta">Contact Us</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <img src="assets/svg/logo.svg" alt="Evoluciona" />
      <p class="footer-tagline">Driven by Empathy,<br>Powered by technology.</p>
      <div class="footer-social">
        <a href="#"><img src="assets/svg/likeding.svg" alt="LinkedIn" /></a>
        <a href="#"><img src="assets/svg/intelcia-logo.svg" alt="Intelcia" height="18" /></a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Navigation</h5>
      <ul>
        <li><a href="index.html">Accueil</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="actualites.html">Actualités</a></li>
        <li><a href="carrieres.html">Carrières</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Services</h5>
      <ul>
        <li><a href="services.html#digital">Digital Solutions</a></li>
        <li><a href="services.html#consulting">Consulting</a></li>
        <li><a href="services.html#tech">Tech Solutions</a></li>
        <li><a href="services.html#analytics">Analytics & IA</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Légal</h5>
      <ul>
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#">Politique de confidentialité</a></li>
        <li><a href="#">Cookies</a></li>
        <li><a href="carrieres.html">Rejoindre l'équipe</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2024 Evoluciona. All rights reserved.</span>
    <div class="footer-bottom-links">
      <a href="#">LinkedIn</a>
      <a href="contact.html">Nous contacter</a>
      <a href="carrieres.html" class="btn-nav-cta" style="font-size:10px;padding:8px 16px;">Rejoindre l'équipe</a>
    </div>
  </div>
</footer>`;

function injectNav() {
  const el = document.getElementById('nav-placeholder');
  if (el) el.outerHTML = NAV_HTML;
  // highlight active link
  const links = document.querySelectorAll('.nav-links-main a');
  links.forEach(a => {
    if (a.getAttribute('href') === window.location.pathname.split('/').pop()) {
      a.classList.add('active');
    }
  });
}

function injectFooter() {
  const el = document.getElementById('footer-placeholder');
  if (el) el.outerHTML = FOOTER_HTML;
}

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
});
