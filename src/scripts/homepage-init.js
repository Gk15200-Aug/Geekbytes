/** Defer homepage-only scripts until after load to keep TBT low during Lighthouse. */
window.addEventListener('load', () => {
  setTimeout(() => {
    import('./active-nav.js');
    import('./project-filter.js');
    import('./scroll-animations.js');
    import('./form-validation.js');
  }, 0);
});
