// Naffy product checkout link
const CHECKOUT_URL = 'https://www.naffy.io/maciej-kruszewski/matematyka-od-zera-g1y';

const purchase = document.getElementById('buy-button');
if (purchase) {
  purchase.href = CHECKOUT_URL;
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Subtle reveal effects; respect reduced-motion preference.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), {threshold: .12});
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });
}