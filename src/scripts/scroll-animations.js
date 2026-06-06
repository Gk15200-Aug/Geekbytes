const elements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-4');
      entry.target.classList.add('opacity-100', 'translate-y-0');
      // Remove animation classes after transition so hover effects work properly
      setTimeout(() => {
        entry.target.classList.remove('animate-on-scroll', 'transition-all', 'duration-700');
      }, 800);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));
