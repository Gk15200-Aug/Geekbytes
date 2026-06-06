const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');

const activeClasses = 'bg-brand-accent text-white';
const inactiveClasses = 'bg-transparent text-brand-white/70';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Update button styles
    buttons.forEach(b => {
      b.setAttribute('aria-selected', 'false');
      b.className = 'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 min-h-[44px] inline-flex items-center bg-transparent border border-white/20 text-brand-white/70 hover:border-brand-accent/50 hover:text-brand-white';
    });
    btn.setAttribute('aria-selected', 'true');
    btn.className = 'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 min-h-[44px] inline-flex items-center bg-brand-accent text-white';

    // Filter cards
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
