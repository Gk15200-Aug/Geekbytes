const btn = document.getElementById('mobile-menu-toggle');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
  function openMenu() {
    btn.setAttribute('aria-expanded', 'true');
    menu.classList.remove('hidden');
    menu.setAttribute('aria-hidden', 'false');
  }
  function closeMenu() {
    menu.classList.add('hidden');
    menu.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
  }
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  const closeBtn = menu.querySelector('.mobile-menu-close');
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
}
