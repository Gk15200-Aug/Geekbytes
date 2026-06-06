// Handle anchor links for smooth scrolling (works with both #section and /#section)
document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    
    // Extract the hash part
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;
    const hash = href.substring(hashIndex);
    const path = href.substring(0, hashIndex);
    
    // Only smooth scroll if we're on the same page (home page)
    if (path === '' || path === '/' || window.location.pathname === '/') {
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Otherwise let the browser navigate normally to /#section
  });
});
