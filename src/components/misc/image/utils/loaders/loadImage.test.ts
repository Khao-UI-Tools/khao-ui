import loadImage from './loadImage';

const DATA_SRC_ATTR_NAME = 'data-src';
const PLACEHOLDER_PATH = 'http://localhost/my-image-place-holder-path';
const IMAGE_PATH = 'http://localhost/my-funky-image-path';

const image = document.createElement('img');
image.setAttribute('src', PLACEHOLDER_PATH);
image.setAttribute('data-src', IMAGE_PATH);

it('it should replace the src attribute with the data-src and remove the data-src attribute', () => {
    expect(image.src).toBe(PLACEHOLDER_PATH);
    expect(image.getAttribute(DATA_SRC_ATTR_NAME)).toBe(IMAGE_PATH);

    loadImage(image);

    expect(image.src).toBe(IMAGE_PATH);

    expect(image.getAttribute(DATA_SRC_ATTR_NAME)).toBe(null);
});
