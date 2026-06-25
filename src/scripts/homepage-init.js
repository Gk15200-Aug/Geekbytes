/** Defer homepage-only scripts until after load to keep TBT low during Lighthouse. */
window.addEventListener('load', () => {
  setTimeout(() => {
    import('./active-nav.js');
    import('./project-filter.js');
    import('./project-thumbnails.js');
    import('./form-validation.js');
  }, 0);
});
