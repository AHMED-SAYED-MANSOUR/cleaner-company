/* Future Clean — animation runtime
   Add data-anim="up|fade|left|right|zoom|blur|reveal-x|reveal-y|rise|text-rise"
   Add data-stagger to a parent to stagger its direct children.
   Add data-delay="N" (ms) for offsets.
*/
window.FC = window.FC || {};

window.FC.initAnimations = function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  document.documentElement.classList.add("js-anim-ready");

  /* ---- splitting words into per-letter mask spans ---- */
  document.querySelectorAll("[data-anim='text-rise']").forEach(el => {
    if (el.dataset.split === "done") return;
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words
      .map(w => `<span class="split-word"><span>${w}</span></span>`)
      .join(" ");
    el.dataset.split = "done";
  });

  /* ---- stagger init ---- */
  document.querySelectorAll("[data-stagger]").forEach(parent => {
    const step = parseInt(parent.dataset.stagger, 10) || 80;
    [...parent.children].forEach((child, i) => {
      child.style.transitionDelay = (i * step) + "ms";
    });
  });

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-anim], [data-stagger]").forEach(el => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.delay, 10) || 0;
        if (delay) setTimeout(() => e.target.classList.add("in"), delay);
        else e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  document.querySelectorAll("[data-anim], [data-stagger]").forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
      const delay = parseInt(el.dataset.delay, 10) || 0;
      if (delay) setTimeout(() => el.classList.add("in"), delay);
      else el.classList.add("in");
    } else {
      io.observe(el);
    }
  });

  // safety net
  setTimeout(() => {
    document.querySelectorAll("[data-anim]:not(.in), [data-stagger]:not(.in)").forEach(el => el.classList.add("in"));
  }, 3500);
};

/* ---------- scroll progress bar ---------- */
window.FC.initScrollProgress = function () {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.setProperty("--p", p + "%");
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
};

/* ---------- parallax ---------- */
window.FC.initParallax = function () {
  const els = document.querySelectorAll("[data-parallax]");
  if (!els.length) return;
  let ticking = false;
  const tick = () => {
    els.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const offset = (window.innerHeight / 2 - center) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(tick); ticking = true; }
  }, { passive: true });
  tick();
};

/* ---------- magnetic / tilt ---------- */
window.FC.initTilt = function () {
  document.querySelectorAll("[data-tilt]").forEach(el => {
    const max = parseFloat(el.dataset.tilt) || 6;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateY(-3px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });
};

/* ---------- enhanced counter w/ pulse ---------- */
window.FC.animateCountersPro = function () {
  const els = document.querySelectorAll("[data-counter]");
  if (!els.length) return;
  const arDigits = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
  const fmt = (n) => {
    const s = Math.round(n).toLocaleString("en-US");
    return window.FC.lang === "ar" ? s.replace(/\d/g, d => arDigits[d]) : s;
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.counter);
      const dur = 1700;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      el.classList.add("counter-pulsing");
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach(el => io.observe(el));
};

/* ---------- run all ---------- */
window.FC.boot = function () {
  if (typeof window.FC.applyLang === "function") window.FC.applyLang();
  window.FC.initScrollProgress();
  window.FC.initAnimations();
  window.FC.initParallax();
  window.FC.initTilt();
  window.FC.animateCountersPro();
};
