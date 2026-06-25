const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('a[data-section]');

let sectionLayout = [];
let ticking = false;

function cacheSectionLayout() {
  sectionLayout = [...sections].map((section) => ({
    id: section.id,
    top: section.offsetTop,
    bottom: section.offsetTop + section.offsetHeight,
  }));
}

function updateActiveNav() {
  const scrollPos = window.scrollY + 100;

  for (const { id, top, bottom } of sectionLayout) {
    if (scrollPos < top || scrollPos >= bottom) continue;

    navLinks.forEach((link) => {
      const indicator = link.querySelector('.nav-indicator');
      if (!indicator) return;

      if (link.dataset.section === id) {
        indicator.style.transform = 'scaleX(1)';
        link.classList.add('text-brand-white');
        link.classList.remove('text-brand-white/70');
      } else {
        indicator.style.transform = 'scaleX(0)';
        link.classList.remove('text-brand-white');
        link.classList.add('text-brand-white/70');
      }
    });
    break;
  }

  ticking = false;
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateActiveNav);
}

cacheSectionLayout();
window.addEventListener('resize', cacheSectionLayout, { passive: true });
window.addEventListener('scroll', onScroll, { passive: true });
updateActiveNav();
