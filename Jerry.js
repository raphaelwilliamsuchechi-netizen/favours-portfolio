// Intersection Observer to add the flip-in class when elements enter view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

// Watch all elements with .flip
document.querySelectorAll('.flip').forEach((el) => observer.observe(el));

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('open');
});

// Simple year stamp
document.getElementById('year').textContent = new Date().getFullYear();