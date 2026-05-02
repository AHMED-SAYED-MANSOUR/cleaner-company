/* Future Clean Service — shared site components: header, footer, floating CTA */
window.FC = window.FC || {};

window.FC.renderHeader = function (current) {
  const t = window.FC.t.bind(window.FC);
  const lang = window.FC.lang;
  const items = [
    { id: "home", href: "index.html", label: t("nav.home") },
    { id: "about", href: "about.html", label: t("nav.about") },
    { id: "services", href: "services.html", label: t("nav.services") },
    { id: "works", href: "works.html", label: t("nav.works") },
    { id: "contact", href: "contact.html", label: t("nav.contact") },
  ];
  return `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="index.html" aria-label="Future Clean Service">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2c1.5 3.5 4 5.5 7 6.5-1 4-3.5 7-7 9.5-3.5-2.5-6-5.5-7-9.5C8 7.5 10.5 5.5 12 2z"/>
              <path d="M12 8v6"/><path d="M9 11h6"/>
            </svg>
          </span>
          <span class="brand-text">
            ${t("brand.name")}
            <small>${t("brand.tag")}</small>
          </span>
        </a>
        <nav class="nav-links" id="navLinks" aria-label="Primary">
          ${items.map(i => `<a href="${i.href}" class="${current === i.id ? "active" : ""}">${i.label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <div class="lang-toggle" role="tablist" aria-label="Language">
            <button class="${lang === "ar" ? "active" : ""}" data-lang="ar">AR</button>
            <button class="${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
          </div>
          <a href="contact.html" class="btn btn-accent" style="padding:10px 18px">
            ${t("cta.book")}
            <span class="arrow" aria-hidden="true">→</span>
          </a>
          <button class="menu-toggle" id="menuToggle" aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  `;
};

window.FC.renderFooter = function () {
  const t = window.FC.t.bind(window.FC);
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="index.html" style="color:#fff">
              <span class="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2c1.5 3.5 4 5.5 7 6.5-1 4-3.5 7-7 9.5-3.5-2.5-6-5.5-7-9.5C8 7.5 10.5 5.5 12 2z"/>
                  <path d="M12 8v6"/><path d="M9 11h6"/>
                </svg>
              </span>
              <span class="brand-text" style="color:#fff">
                ${t("brand.name")}
                <small style="color:#7a8a83">${t("brand.tag")}</small>
              </span>
            </a>
            <p style="color:#aab5b0; margin-top:18px; max-width:36ch">${t("foot.about")}</p>
            <p class="quote">${t("foot.quote")}</p>
          </div>
          <div>
            <h4>${t("foot.links")}</h4>
            <ul>
              <li><a href="index.html">${t("nav.home")}</a></li>
              <li><a href="about.html">${t("nav.about")}</a></li>
              <li><a href="services.html">${t("nav.services")}</a></li>
              <li><a href="works.html">${t("nav.works")}</a></li>
              <li><a href="contact.html">${t("nav.contact")}</a></li>
            </ul>
          </div>
          <div>
            <h4>${t("foot.contact")}</h4>
            <ul>
              <li><a href="tel:+201100618568">+20 110 061 8568</a></li>
              <li><a href="tel:+201012345678">+20 101 234 5678</a></li>
              <li><a href="mailto:info@future-clean-service.com">info@future-clean-service.com</a></li>
              <li>${t("contact.info.address")}</li>
            </ul>
          </div>
          <div>
            <h4>${t("foot.follow")}</h4>
            <div class="socials">
              <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V9z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
              <a href="https://wa.me/201100618568" aria-label="WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm5.4 14.3c-.2.6-1.2 1.2-1.7 1.2-.4 0-.9.2-3.2-.9-2.7-1.1-4.3-3.9-4.5-4.1-.1-.2-1-1.4-1-2.6 0-1.3.7-1.9.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 2 .8 2.1.1.2.1.3 0 .5l-.3.4c-.2.2-.3.3-.4.5-.1.2-.3.4-.1.7.2.4.9 1.5 1.9 2.4 1.3 1.1 2.4 1.5 2.7 1.6.3.1.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.8-.1 1.5z"/></svg></a>
              <a href="#" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7.5 8.6L22 21h-6.3l-5-6.5L4.5 21H1.5l8-9.2L1 3h6.4l4.5 6 6.1-6z"/></svg></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>${t("foot.rights")}</span>
          <span>Cairo · Egypt</span>
        </div>
      </div>
    </footer>
  `;
};

window.FC.renderFloatingCta = function () {
  const t = window.FC.t.bind(window.FC);
  return `
    <div class="floating-cta">
      <a class="fab whatsapp" href="https://wa.me/201100618568" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm5.4 14.3c-.2.6-1.2 1.2-1.7 1.2-.4 0-.9.2-3.2-.9-2.7-1.1-4.3-3.9-4.5-4.1-.1-.2-1-1.4-1-2.6 0-1.3.7-1.9.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 2 .8 2.1.1.2.1.3 0 .5l-.3.4c-.2.2-.3.3-.4.5-.1.2-.3.4-.1.7.2.4.9 1.5 1.9 2.4 1.3 1.1 2.4 1.5 2.7 1.6.3.1.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.8-.1 1.5z"/></svg>
        ${t("cta.whatsapp")}
      </a>
      <a class="fab" href="tel:+201100618568" aria-label="Call">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z"/></svg>
        ${t("cta.call")}
      </a>
    </div>
  `;
};

window.FC.mountChrome = function (current) {
  window.FC.applyLang();
  document.body.insertAdjacentHTML("afterbegin", window.FC.renderHeader(current));
  document.body.insertAdjacentHTML("beforeend", window.FC.renderFooter());
  document.body.insertAdjacentHTML("beforeend", window.FC.renderFloatingCta());

  // language toggle
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.addEventListener("click", () => window.FC.setLang(b.dataset.lang));
  });
  // mobile menu
  const m = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  if (m && links) m.addEventListener("click", () => links.classList.toggle("open"));
};

/* ---------- intersection observer fade-in ---------- */
window.FC.observeReveal = function () {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  // mark as JS-controlled; content stays visible if JS / IO unsupported
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("in"));
    return;
  }
  document.documentElement.classList.add("js-reveal-ready");
  const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
  );
  els.forEach(el => {
    // immediately mark elements that are already on screen
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add("in");
    } else {
      io.observe(el);
    }
  });
  // fail-safe: after 2s, force any remaining reveals visible
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.in)").forEach(el => el.classList.add("in"));
  }, 2000);
};

/* ---------- counter animation ---------- */
window.FC.animateCounters = function () {
  const els = document.querySelectorAll("[data-counter]");
  if (!els.length) return;
  const arDigits = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
  const fmt = (n) => {
    const s = Math.round(n).toLocaleString("en-US");
    if (window.FC.lang === "ar") return s.replace(/\d/g, d => arDigits[d]);
    return s;
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.counter);
      const dur = 1400;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach(el => io.observe(el));
};
