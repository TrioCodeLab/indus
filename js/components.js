/* ===================================================
   MH Industrial — Shared HTML Components
   Call injectComponents() in each page
   =================================================== */

const WHATSAPP_NUMBER = '919XXXXXXXXX';
const WHATSAPP_MSG = encodeURIComponent('Hello, I am interested in your industrial products. Please share more details.');
const FORMSPREE_ID = 'xqejoada'; // https://formspree.io/f/xqejoada <- replace with your own ID

function getNavHTML(activePage) {
  return `
  <nav class="navbar" id="navbar">
    <div class="container navbar__inner">
      <a href="${getRoot(activePage)}index.html" class="navbar__logo">
        <div class="navbar__logo-icon">
          <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
        </div>
        <div class="navbar__logo-text">
          <span class="navbar__logo-name">triocodelab. Industrial</span>
          <span class="navbar__logo-sub">Equipment Suppliers</span>
        </div>
      </a>

      <nav class="navbar__nav">
        <a href="${getRoot(activePage)}index.html">Home</a>
        <a href="${getRoot(activePage)}pages/about.html">About</a>
        <div class="navbar__dropdown">
          <a href="${getRoot(activePage)}pages/products.html">Products</a>
          <div class="navbar__dropdown-menu">
            <a href="${getRoot(activePage)}pages/category/couplings.html">Couplings</a>
            <a href="${getRoot(activePage)}pages/category/seals.html">Seals</a>
            <a href="${getRoot(activePage)}pages/category/chains.html">Chains</a>
            <a href="${getRoot(activePage)}pages/category/sprockets.html">Sprockets</a>
            <a href="${getRoot(activePage)}pages/category/belts.html">Belts</a>
            <a href="${getRoot(activePage)}pages/category/pulleys.html">Pulleys</a>
            <a href="${getRoot(activePage)}pages/category/hose-clamps.html">Hose Clamps</a>
            <a href="${getRoot(activePage)}pages/category/mounts.html">Mounts</a>
          </div>
        </div>
        <a href="${getRoot(activePage)}pages/quote.html">Get Quote</a>
        <a href="${getRoot(activePage)}pages/contact.html">Contact</a>
      </nav>

      <div class="navbar__actions">
        <button class="navbar__search" data-search-trigger aria-label="Search products">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <span>Search</span>
          <span style="font-size:11px;font-family:var(--font-mono);background:var(--gray-200);padding:2px 6px;border-radius:3px;margin-left:4px;color:var(--gray-600)">⌘K</span>
        </button>
        <a href="${getRoot(activePage)}pages/quote.html" class="btn btn--primary btn--sm">Request Quote</a>
      </div>

      <button class="navbar__hamburger" aria-label="Menu" id="hamburgerBtn">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <div class="navbar__mobile" id="mobileMenu">
    <a href="${getRoot(activePage)}index.html">Home</a>
    <a href="${getRoot(activePage)}pages/about.html">About Us</a>
    <div class="mobile-section-label">Products</div>
    <a href="${getRoot(activePage)}pages/products.html">All Products</a>
    <a href="${getRoot(activePage)}pages/category/couplings.html">Couplings</a>
    <a href="${getRoot(activePage)}pages/category/seals.html">Seals</a>
    <a href="${getRoot(activePage)}pages/category/chains.html">Chains</a>
    <a href="${getRoot(activePage)}pages/category/sprockets.html">Sprockets</a>
    <a href="${getRoot(activePage)}pages/category/belts.html">Belts & Pulleys</a>
    <a href="${getRoot(activePage)}pages/category/mounts.html">Mounts</a>
    <a href="${getRoot(activePage)}pages/quote.html">Request Quote</a>
    <a href="${getRoot(activePage)}pages/contact.html">Contact</a>
  </div>
  `;
}

function getFooterHTML(activePage) {
  const root = getRoot(activePage);
  return `
  <footer class="footer">
    <div class="container footer__main">
      <div>
        <div class="footer__logo">
          <div class="footer__logo-icon">
            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
          </div>
          <div>
            <span class="footer__logo-name">triocodelab. Industrial Equipments</span>
            <span class="footer__logo-sub">Power Transmission Specialists</span>
          </div>
        </div>
        <p class="footer__about">Reliable supplier of industrial components — couplings, seals, chains, sprockets, belts, and more. Serving industries across India since 2005.</p>
        <div class="footer__social">
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></a>
          <a href="mailto:info@triocodelabdustrial.in" aria-label="Email"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
        </div>
      </div>
      <div>
        <h4 class="footer__col-title">Products</h4>
        <div class="footer__links">
          <a href="${root}pages/category/couplings.html">Couplings</a>
          <a href="${root}pages/category/seals.html">Seals</a>
          <a href="${root}pages/category/chains.html">Chains</a>
          <a href="${root}pages/category/sprockets.html">Sprockets</a>
          <a href="${root}pages/category/belts.html">Belts</a>
          <a href="${root}pages/category/pulleys.html">Pulleys</a>
          <a href="${root}pages/category/hose-clamps.html">Hose Clamps</a>
          <a href="${root}pages/category/mounts.html">Mounts</a>
        </div>
      </div>
      <div>
        <h4 class="footer__col-title">Company</h4>
        <div class="footer__links">
          <a href="${root}pages/about.html">About Us</a>
          <a href="${root}pages/products.html">All Products</a>
          <a href="${root}pages/quote.html">Request Quote</a>
          <a href="${root}pages/contact.html">Contact</a>
          <a href="${root}sitemap.xml">Sitemap</a>
        </div>
      </div>
      <div>
        <h4 class="footer__col-title">Contact</h4>
        <div class="footer__contact-items">
          <div class="footer__contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <p>123, Industrial Area, MIDC,<br>Mumbai – 400 001, Maharashtra</p>
          </div>
          <div class="footer__contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <p><a href="tel:+919XXXXXXXXX">+91 9X XXXX XXXX</a><br><a href="tel:+912XXXXXXXX">+91 22 XXXX XXXX</a></p>
          </div>
          <div class="footer__contact-item">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <p><a href="mailto:info@triocodelabdustrial.in">info@triocodelabdustrial.in</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container footer__bottom">
      <span>© 2025 triocodelab. Industrial Equipments. All rights reserved.</span>
      <div style="display:flex;gap:16px">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </div>
  </footer>
  `;
}

function getFloatingWhatsApp() {
  return `
  <div class="whatsapp-float">
    <span class="whatsapp-float__tooltip">Chat on WhatsApp</span>
    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}" target="_blank" rel="noopener" class="whatsapp-float__btn" aria-label="WhatsApp Inquiry">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
    </a>
  </div>
  `;
}

function getSearchOverlay() {
  return `
  <div class="search-overlay" id="searchOverlay">
    <div class="search-overlay__box">
      <div class="search-overlay__input-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <input type="text" id="searchInput" class="search-overlay__input" placeholder="Search products — e.g. oil seal, roller chain…" autocomplete="off">
        <button class="search-overlay__close" id="searchClose">ESC</button>
      </div>
      <div class="search-overlay__results" id="searchResults">
        <p style="text-align:center;color:var(--text-muted);font-size:14px;padding:24px">Start typing to search products...</p>
      </div>
    </div>
  </div>
  `;
}

function getRoot(page) {
  // pages/category/x.html needs ../../
  // pages/x.html needs ../
  // index.html needs ./
  if (!page) return './';
  const depth = (page.match(/\//g) || []).length;
  if (depth === 0) return './';
  return '../'.repeat(depth);
}

function getQuoteFormHTML(productName) {
  const productField = productName
    ? `<input type="hidden" name="product" value="${productName}">`
    : `<div class="form-field form-grid--full">
         <label for="qProduct">Product of Interest</label>
         <select id="qProduct" name="product">
           <option value="">Select a product</option>
           <optgroup label="Couplings">
             <option>Tyre Couplings</option>
             <option>Gear Couplings</option>
             <option>Jaw Couplings</option>
           </optgroup>
           <optgroup label="Seals">
             <option>Oil Seals</option>
             <option>Hydraulic Seals</option>
             <option>Pneumatic Seals</option>
           </optgroup>
           <optgroup label="Chains">
             <option>Roller Chains</option>
             <option>Conveyor Chains</option>
           </optgroup>
           <optgroup label="Sprockets"><option>Sprockets</option></optgroup>
           <optgroup label="Belts">
             <option>V-Belts</option>
             <option>Timing Belts</option>
           </optgroup>
           <optgroup label="Other">
             <option>Pulleys</option>
             <option>Hose Clamps</option>
             <option>Anti-Vibration Mounts</option>
             <option>Leveling Mounts</option>
           </optgroup>
         </select>
       </div>`;
  return `
  <form class="form-grid js-formspree" action="https://formspree.io/f/${FORMSPREE_ID}" method="POST">
    <div class="form-field">
      <label for="qName">Full Name <span style="color:var(--orange)">*</span></label>
      <input id="qName" name="name" type="text" placeholder="Your name" required>
    </div>
    <div class="form-field">
      <label for="qCompany">Company Name</label>
      <input id="qCompany" name="company" type="text" placeholder="Your company">
    </div>
    <div class="form-field">
      <label for="qEmail">Email Address <span style="color:var(--orange)">*</span></label>
      <input id="qEmail" name="email" type="email" placeholder="you@company.com" required>
    </div>
    <div class="form-field">
      <label for="qPhone">Phone Number <span style="color:var(--orange)">*</span></label>
      <input id="qPhone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required>
    </div>
    ${productField}
    <div class="form-field">
      <label for="qQty">Quantity Required</label>
      <input id="qQty" name="quantity" type="text" placeholder="e.g. 50 pcs, 100 m, bulk">
    </div>
    <div class="form-field form-grid--full">
      <label for="qMsg">Message / Specifications</label>
      <textarea id="qMsg" name="message" placeholder="Share any specific requirements, standards (IS/DIN/BS), or questions…"></textarea>
    </div>
    <div class="form-grid--full">
      <button type="submit" class="btn btn--primary">Send Inquiry</button>
    </div>
  </form>
  <div class="form-success">
    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z"/></svg>
    <h3>Inquiry Sent!</h3>
    <p>Thank you. We'll get back to you within one business day.</p>
  </div>
  `;
}

// Inject everything
function injectComponents(page) {
  const navEl = document.getElementById('nav-inject');
  const footerEl = document.getElementById('footer-inject');
  const waEl = document.getElementById('wa-inject');
  const searchEl = document.getElementById('search-inject');

  if (navEl) navEl.innerHTML = getNavHTML(page);
  if (footerEl) footerEl.innerHTML = getFooterHTML(page);
  if (waEl) waEl.innerHTML = getFloatingWhatsApp();
  if (searchEl) searchEl.innerHTML = getSearchOverlay();
}
