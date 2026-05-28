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

/* ===========================
   CERTIFICATION: MORPH / OVERLAY
   =========================== */
// Create overlay element once
const certOverlay = document.createElement('div');
certOverlay.className = 'cert-overlay';
certOverlay.innerHTML = `
  <div class="inner" role="dialog" aria-modal="true">
    <img src="" alt="certificate preview">
  </div>
  <button class="close" aria-label="Tutup">✕</button>
`;
document.body.appendChild(certOverlay);

const overlayImg = certOverlay.querySelector('img');
const overlayClose = certOverlay.querySelector('.close');

function openCertOverlay(imgSrc, alt) {
  overlayImg.src = imgSrc;
  overlayImg.alt = alt || 'Sertifikat';
  certOverlay.classList.add('show');
  // fade original card info
}

function closeCertOverlay() {
  certOverlay.classList.remove('show');
  overlayImg.src = '';
}

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', (e) => {
    // ignore if clicking link inside
    if (e.target.closest('a, button')) return;
    const img = card.querySelector('img');
    if (!img) return;
    // mark info dim
    const info = card.querySelector('.cert-info');
    if (info) info.classList.add('dim');
    openCertOverlay(img.src, img.alt);
  });
});

overlayClose.addEventListener('click', () => {
  closeCertOverlay();
  document.querySelectorAll('.cert-info.dim').forEach(i => i.classList.remove('dim'));
});

certOverlay.addEventListener('click', (e) => {
  if (e.target === certOverlay) {
    closeCertOverlay();
    document.querySelectorAll('.cert-info.dim').forEach(i => i.classList.remove('dim'));
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (certOverlay.classList.contains('show')) {
      closeCertOverlay();
      document.querySelectorAll('.cert-info.dim').forEach(i => i.classList.remove('dim'));
    }
  }
});
