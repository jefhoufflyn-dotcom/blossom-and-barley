// Blossom & Barley · kleine interacties

// Scroll-reveal
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-visible'));
}

// Voorbeeldformulier (alleen zolang de MailerLite-embed er nog niet in staat)
const demo = document.getElementById('bb-placeholder-form');
if (demo) {
  demo.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!demo.checkValidity()) { demo.reportValidity(); return; }
    demo.innerHTML = '<h3 style="color:#2F6A4D">Yes, welkom bij de brew crew!</h3><p>Check je inbox om je inschrijving te bevestigen.</p>';
  });
}
