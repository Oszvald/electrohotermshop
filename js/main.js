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
    hu: {
      "nav.brand": "Electro Hoterm",
      "nav.home": "Főoldal",
      "nav.services": "Szolgáltatások",
      "nav.about": "Rólunk",
      "nav.projects": "Referenciák",
      "nav.contact": "Kapcsolat",
      "hero.title": "Okos fűtés és tiszta energia,<br>az Electro Hoterm megoldja!",
      "hero.tagline": "A megbízható partnered otthonod energiamodernizálásában.",
      "hero.button": "Ajánlatkérés",
      "services.title": "Szolgáltatásaink",
      "service.solar.title": "Napelem",
      "service.solar.desc": "Napelemes rendszerek teljes körű tervezése és telepítése – modern energiatakarékosság!",
      "service.heatpump.title": "Hőszivattyú",
      "service.heatpump.desc": "Energiatakarékos hűtés-fűtés, környezetbarát és gazdaságos technológia.",
      "service.electrical.title": "Villanyszerelés",
      "service.electrical.desc": "Új és meglévő elektromos hálózatok tervezése, kivitelezése, karbantartása.",
      "service.heating.title": "Fűtésszerelés",
      "service.heating.desc": "Padlófűtés, radiátoros rendszerek, fűtésszerelés korszerűen, takarékosan.",
      "service.smarthome.title": "Okosotthon",
      "service.smarthome.desc": "Automatizálás, vezérlés, kényelmes és jövőálló otthon – távolról is!",
      "service.plumbing.title": "Vízszerelés",
      "service.plumbing.desc": "Vízvezetékek, csapok, szaniterek szerelése és javítása, gyors hibaelhárítás.",
      "service.ac.title": "Klímaberendezés",
      "service.ac.desc": "Hatékony hűtés-fűtés modern, energiatakarékos klímatechnikával.",
      "about.title": "Rólunk",
      "about.text": "Több mint 20 éves tapasztalat, lelkes csapat és a legmodernebb technológiák: az Electro Hoterm SRL célja, hogy ügyfelei számára gyors, korrekt, és fenntartható energetikai és komfort megoldásokat kínáljon. Lakossági és ipari projektek, villanyszereléstől a fűtésen át a napelemig – nálunk minden egy kézben!",
      "projects.title": "Referenciák",
      "project.amo": "Családi ház – napelemes rendszer",
      "project.beres": "Solaredge inverter telepítése",
      "project.mozi": "Growatt inverter+akkumulátor telepítése",
      "project.cheia": "Padlófűtés szerelés",
      "project.teleky": "8KW Napelem rendszer",
      "project.dorka": "20KW Napelem rendszer",
      "contact.title": "Kapcsolat",
      "contact.phoneLabel": "Telefon:",
      "contact.emailLabel": "Email:",
      "contact.formTitle": "Írj üzenetet közvetlenül",
      "contact.namePlaceholder": "Neved",
      "contact.emailPlaceholder": "Email címed",
      "contact.messagePlaceholder": "Üzeneted...",
      "contact.submitButton": "Üzenet küldése",
      "footer.text": "© 2025 Electro Hoterm SRL – Okos fűtés és tiszta energia"
    },
    ro: {
      "nav.brand": "Electro Hoterm",
      "nav.home": "Pagina principală",
      "nav.services": "Servicii",
      "nav.about": "Despre noi",
      "nav.projects": "Referințe",
      "nav.contact": "Contact",
      "hero.title": "Încălzire inteligentă și energie curată,<br>Electro Hoterm rezolvă!",
      "hero.tagline": "Partenerul tău de încredere în modernizarea energetică a casei.",
      "hero.button": "Cere ofertă",
      "services.title": "Serviciile noastre",
      "service.solar.title": "Panouri solare",
      "service.solar.desc": "Proiectare și instalare completă a sistemelor fotovoltaice – economii de energie moderne!",
      "service.heatpump.title": "Pompe de căldură",
      "service.heatpump.desc": "Încălzire-răcire eficientă, ecologică și economică cu tehnologie de ultimă generație.",
      "service.electrical.title": "Instalații electrice",
      "service.electrical.desc": "Proiectare, execuție și întreținere pentru rețele electrice noi și existente.",
      "service.heating.title": "Instalații de încălzire",
      "service.heating.desc": "Încălzire prin pardoseală, calorifere – montaj modern și economic.",
      "service.smarthome.title": "Casă inteligentă",
      "service.smarthome.desc": "Automatizări și control de la distanță pentru confort și viitor.",
      "service.plumbing.title": "Instalații sanitare",
      "service.plumbing.desc": "Montaj și reparații de țevi, robineți și obiecte sanitare – intervenții rapide.",
      "service.ac.title": "Aer condiționat",
      "service.ac.desc": "Răcire-încălzire eficientă cu aparate moderne și consum redus.",
      "about.title": "Despre noi",
      "about.text": "Peste 20 de ani de experiență, o echipă pasionată și cele mai noi tehnologii: Electro Hoterm SRL își propune să ofere rapid, corect și sustenabil soluții energetice și de confort. De la proiecte rezidențiale la industriale, de la instalații electrice la încălzire și panouri solare – totul dintr-o singură sursă!",
      "projects.title": "Referințe",
      "project.amo": "Casă familială – sistem fotovoltaic",
      "project.beres": "Instalare invertor Solaredge",
      "project.mozi": "Instalare invertor+acumulator Growatt",
      "project.cheia": "Montaj încălzire prin pardoseală",
      "project.teleky": "Sistem fotovoltaic 8 kW",
      "project.dorka": "Sistem fotovoltaic 20 kW",
      "contact.title": "Contact",
      "contact.phoneLabel": "Telefon:",
      "contact.emailLabel": "Email:",
      "contact.formTitle": "Trimite-ne un mesaj direct",
      "contact.namePlaceholder": "Numele tău",
      "contact.emailPlaceholder": "Email-ul tău",
      "contact.messagePlaceholder": "Mesajul tău…",
      "contact.submitButton": "Trimite mesaj",
      "footer.text": "© 2025 Electro Hoterm SRL – Încălzire inteligentă și energie curată"
    }
  };

  function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = translations[lang][key] || el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = translations[lang][key] || el.placeholder;
    });
  }

  // Alapnyelv betöltése és gombok eseménnyel
  const savedLang = localStorage.getItem('lang') || 'hu';
  setLanguage(savedLang);
  document.querySelectorAll('.language-switcher button')
    .forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));
});
