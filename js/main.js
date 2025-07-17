document.addEventListener('DOMContentLoaded', () => {
  /* ==== 1) ANIMÁCIÓK (Intersection Observer) ==== */
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('enter');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.17 }
  );
  document
    .querySelectorAll('.animate-on-scroll, .service-card, .about-img, .about-text, .project-card, .contact-card')
    .forEach(el => observer.observe(el));

  /* ==== 2) HAMBURGER MENÜ ÉS IKON-ANIMÁCIÓ ==== */
  const btn = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        btn.classList.remove('active');
        nav.classList.remove('open');
      })
    );
  }

  /* ==== 3) SMOOTH SCROLL ==== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const tgt = document.querySelector(anchor.getAttribute('href'));
      if (tgt) tgt.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ==== 4) I18N – NYELVVÁLTÁS ==== */
  const translations = {
    hu: { /* … minden kulcs magyarul … */ },
    ro: { /* … minden kulcs románul … */ }
  };
  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    localStorage.setItem('lang', lang);
  }
  // Alap beállítás
  const savedLang = localStorage.getItem('lang') || 'hu';
  setLanguage(savedLang);
  // Gombokhoz esemény
  document.querySelectorAll('.language-switcher button').forEach(btn =>
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang))
  );
});
