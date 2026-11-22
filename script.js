// DEMO configuration: insert your payment checkout URL to activate purchasing.
const CHECKOUT_URL = ''; // e.g. https://your-platform.example/checkout
const purchase = document.getElementById('buy-button');
purchase.addEventListener('click', (event) => {
  if (!CHECKOUT_URL) {
    event.preventDefault();
    alert('To wersja demonstracyjna. Wklej link do checkoutu w script.js, aby aktywować sprzedaż.');
    return;
  }
  purchase.href = CHECKOUT_URL;
});
document.getElementById('year').textContent = new Date().getFullYear();
// Subtle reveal effects; respect reduced-motion preference.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold: .12});
  document.querySelectorAll('section').forEach(section => { section.classList.add('reveal'); observer.observe(section); });
}