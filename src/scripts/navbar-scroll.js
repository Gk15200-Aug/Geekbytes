const nav = document.getElementById('site-nav');

if (nav) {
  const SCROLL_THRESHOLD = 32;
  let ticking = false;

  function updateNavShell() {
    nav.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateNavShell);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateNavShell();
}
