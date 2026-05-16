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
            <img src="assets/logo.svg" alt="">
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
                <img src="assets/logo.svg" alt="">
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
              <li><a href="tel:+201119383646">+20 111 938 3646</a></li>
              <li><a href="tel:+201040907990">+20 104 090 7990</a></li>
              <li><a href="mailto:info@future-clean-service.com">info@future-clean-service.com</a></li>
              <li>${t("contact.info.address")}</li>
            </ul>
          </div>
          <div>
            <h4>${t("foot.follow")}</h4>
            <div class="socials">
              <a href="https://www.facebook.com/share/1HT4WYsaZH/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V9z"/></svg></a>
              <a href="https://www.tiktok.com/@ayadala3" target="_blank" rel="noopener" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.79a8.16 8.16 0 0 0 4.77 1.52V6.86a4.85 4.85 0 0 1-1.84-.17z"/></svg></a>rcle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
              <a href="https://wa.me/201119383646" aria-label="WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm5.4 14.3c-.2.6-1.2 1.2-1.7 1.2-.4 0-.9.2-3.2-.9-2.7-1.1-4.3-3.9-4.5-4.1-.1-.2-1-1.4-1-2.6 0-1.3.7-1.9.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 2 .8 2.1.1.2.1.3 0 .5l-.3.4c-.2.2-.3.3-.4.5-.1.2-.3.4-.1.7.2.4.9 1.5 1.9 2.4 1.3 1.1 2.4 1.5 2.7 1.6.3.1.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.8-.1 1.5z"/></svg></a>
              <a href="https://www.tiktok.com/@ayadala3" target="_blank" rel="noopener" aria-label="X" style="display:none"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7.5 8.6L22 21h-6.3l-5-6.5L4.5 21H1.5l8-9.2L1 3h6.4l4.5 6 6.1-6z"/></svg></a>
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
      <a class="fab whatsapp" href="https://wa.me/201119383646" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm5.4 14.3c-.2.6-1.2 1.2-1.7 1.2-.4 0-.9.2-3.2-.9-2.7-1.1-4.3-3.9-4.5-4.1-.1-.2-1-1.4-1-2.6 0-1.3.7-1.9.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.7 2 .8 2.1.1.2.1.3 0 .5l-.3.4c-.2.2-.3.3-.4.5-.1.2-.3.4-.1.7.2.4.9 1.5 1.9 2.4 1.3 1.1 2.4 1.5 2.7 1.6.3.1.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.8-.1 1.5z"/></svg>
        ${t("cta.whatsapp")}
      </a>
      <a class="fab" href="tel:+201119383646" aria-label="Call">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z"/></svg>
        ${t("cta.call")}
      </a>
    </div>
  `;
};

window.FC.renderFxRibbon = function () {
  const ar = window.FC.lang === "ar";
  const items = ar ? [
    { i: "spark",  l: "تنظيف عميق" },
    { i: "shield", l: "تعقيم معتمد" },
    { i: "drop",   l: "غسيل بالبخار" },
    { i: "polish", l: "تلميع رخام" },
    { i: "glass",  l: "واجهات زجاجية" },
    { i: "leaf",   l: "مواد آمنة" },
    { i: "clock",  l: "متاحون ٢٤/٧" },
    { i: "spark",  l: "ضمان نتائج" },
  ] : [
    { i: "spark",  l: "Deep clean" },
    { i: "shield", l: "Certified disinfection" },
    { i: "drop",   l: "Steam wash" },
    { i: "polish", l: "Marble polish" },
    { i: "glass",  l: "Glass facades" },
    { i: "leaf",   l: "Eco-safe products" },
    { i: "clock",  l: "Available 24/7" },
    { i: "spark",  l: "Results guaranteed" },
  ];
  const ico = {
    spark:  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 14.5 9.5 22 12 14.5 14.5 12 22 9.5 14.5 2 12 9.5 9.5 12 2"/></svg>',
    shield: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    drop:   '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13z"/></svg>',
    polish: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/></svg>',
    glass:  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18M12 3v18"/></svg>',
    leaf:   '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-6 7-11 16-11 0 9-5 18-9 18z"/><path d="M2 22 11 13"/></svg>',
    clock:  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  };
  const row = items.map(it => `<span class="chip">${ico[it.i] || ico.spark}<span>${it.l}</span><span class="dot"></span></span>`).join("");
  return `<div class="fx-ribbon" aria-hidden="true"><div class="fx-ribbon-track">${row}${row}</div></div>`;
};

window.FC.renderIntroSplash = function () {
  const ar = window.FC.lang === "ar";
  return `
    <div class="fx-intro" id="fxIntro" aria-hidden="true">
      <div class="fx-intro-veil"></div>
      <div class="fx-intro-bubbles">
        ${[...Array(14)].map((_,i) => `<span style="--d:${i*0.07}s; --x:${(i*7)%100}%; --s:${0.6 + (i%5)*0.18}"></span>`).join("")}
      </div>
      <div class="fx-intro-mark">
        <svg viewBox="0 0 80 80" width="84" height="84">
          <defs>
            <linearGradient id="fxg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#10B981"/>
              <stop offset="1" stop-color="#0EA5E9"/>
            </linearGradient>
          </defs>
          <path d="M40 8 C 56 26 64 38 64 50 a24 24 0 0 1 -48 0 C 16 38 24 26 40 8 Z" fill="url(#fxg)"/>
          <path d="M30 46 a10 10 0 0 0 20 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <div class="fx-intro-label">${ar ? "نُلمّع كل ركن…" : "Polishing every corner…"}</div>
      </div>
    </div>
  `;
};

window.FC.mountChrome = function (current) {
  window.FC.applyLang();
  // Splash intro first (only on home — controlled by caller)
  document.body.insertAdjacentHTML("afterbegin", window.FC.renderHeader(current));
  // 3D ribbon directly under header on every page
  document.querySelector(".site-header").insertAdjacentHTML("afterend", window.FC.renderFxRibbon());
  document.body.insertAdjacentHTML("beforeend", window.FC.renderFooter());
  document.body.insertAdjacentHTML("beforeend", window.FC.renderFloatingCta());

  // Page intro splash — first visit per session, on every page
  if (!sessionStorage.getItem("fcIntroShown")) {
    document.body.insertAdjacentHTML("afterbegin", window.FC.renderIntroSplash());
    sessionStorage.setItem("fcIntroShown", "1");
    requestAnimationFrame(() => {
      const el = document.getElementById("fxIntro");
      if (!el) return;
      el.classList.add("play");
      setTimeout(() => el.classList.add("done"), 1600);
      setTimeout(() => el.remove(), 2400);
    });
  }

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
