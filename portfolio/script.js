/* ===========================
   PORTFOLIO — INTERACTIONS
   =========================== */

// Toggle menu mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Fermer le menu après clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// Animation au scroll (fade-in)
const fadeEls = document.querySelectorAll('.section, .project, .skill-card');
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// Effet parallaxe doux sur les shapes du hero
const shapes = document.querySelectorAll('.shape');
window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    shapes.forEach((shape, i) => {
        const factor = (i + 1) * 12;
        shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// Année dynamique dans le footer
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', new Date().getFullYear());
}
