const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('a[data-section]');

// Use scroll event for reliable active detection
function updateActiveNav() {
  const scrollPos = window.scrollY + 100; // offset for fixed nav height

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.id;

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(link => {
        const indicator = link.querySelector('.nav-indicator');
        if (indicator) {
          if (link.dataset.section === id) {
            indicator.style.transform = 'scaleX(1)';
            link.classList.add('text-brand-white');
            link.classList.remove('text-brand-white/70');
          } else {
            indicator.style.transform = 'scaleX(0)';
            link.classList.remove('text-brand-white');
            link.classList.add('text-brand-white/70');
          }
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
updateActiveNav();
