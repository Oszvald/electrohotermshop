document.addEventListener('DOMContentLoaded', function () {
  /* ===== Animáció: Intersection Observer ===== */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('enter');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.17 }
  );
  document
    .querySelectorAll(
      '.animate-on-scroll, .service-card, .about-img, .about-text, .project-card, .contact-card'
    )
    .forEach((el) => observer.observe(el));

  /* ===== Hamburger menü toggle ===== */
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });
  document.querySelectorAll('#nav-links a').forEach((link) =>
    link.addEventListener('click', () => {
      links.classList.remove('open');
    })
  );

  /* ===== Smooth scroll anchor linkekre ===== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});
