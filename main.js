/* ===========================
   MOBILE NAV TOGGLE
   =========================== */
const burger = document.getElementById('burger');
const navMobile = document.getElementById('nav-mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navMobile.classList.toggle('open');
});

// Close mobile nav on link click
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navMobile.classList.remove('open');
  });
});

/* ===========================
   SCROLL REVEAL
   =========================== */
const revealElements = document.querySelectorAll(
  '#about .about-grid > *, #skills .skill-card, #projects .project-card, #certifications .cert-card, #contact .contact-inner > *'
);

revealElements.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(el => revealObserver.observe(el));

/* ===========================
   NAVBAR: ACTIVE LINK HIGHLIGHT
   =========================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--text)'
            : '';
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => sectionObserver.observe(s));

/* ===========================
   NAVBAR: SCROLL SHADOW
   =========================== */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 10px 35px rgba(0,0,0,.04)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

/* ===========================
   SMOOTH SCROLL POLYFILL
   (for browsers that don't support CSS scroll-behavior)
   =========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const navHeight = document.getElementById('navbar').offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
