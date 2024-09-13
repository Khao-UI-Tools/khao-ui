const lazyLoadImage = (img: HTMLImageElement) => {
    if (img.hasAttribute('data-src') && img.dataset.src !== '') {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    }
};

export default lazyLoadImage;
