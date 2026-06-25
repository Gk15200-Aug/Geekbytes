const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 270'/%3E";

export function initProjectThumbnails() {
  const images = document.querySelectorAll('img[data-screenshot]');
  if (images.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const img = entry.target;
        const url = img.dataset.screenshot;
        if (url && img.src === PLACEHOLDER) img.src = url;
        observer.unobserve(img);
      });
    },
    { rootMargin: '120px' },
  );

  images.forEach((img) => {
    img.src = PLACEHOLDER;
    observer.observe(img);
  });
}

initProjectThumbnails();
