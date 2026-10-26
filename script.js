const catalogNav = document.getElementById('catalogNav');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Calculate distance: Card min-width (e.g. 320px) + Gap (1.5rem / ~24px)
const scrollAmount = 344;

prevBtn.addEventListener('click', () => {
  catalogScroll.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  catalogScroll.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});