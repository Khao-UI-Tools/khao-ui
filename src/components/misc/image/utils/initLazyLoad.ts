import loadModernImage from "./loaders/loadModernImage";

const initLazyLoad = (
  picture: HTMLPictureElement,
  lazyloadThreshold: string
) => {
  if (window.IntersectionObserver) {
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadModernImage(entry.target as HTMLPictureElement);
          observer.unobserve(entry.target);
        }
      });
    };

    const imgObserver = new IntersectionObserver(callback, {
      rootMargin: `0px 0px ${lazyloadThreshold} 0px`,
    });

    imgObserver.observe(picture);
  }
};

export default initLazyLoad;
