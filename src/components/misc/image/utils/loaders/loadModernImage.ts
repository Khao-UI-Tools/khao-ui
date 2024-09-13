import loadImage from "./loadImage";

const loadModernImage = (picture: HTMLPictureElement) => {
  const img = picture.querySelector("img");
  const sources = picture.querySelectorAll("source");

  sources.forEach((source) => {
    if (source.dataset.srcset) {
      source.srcset = source.dataset.srcset;
      source.removeAttribute("data-srcset");
    }
  });

  if (img) {
    loadImage(img);
  }
};

export default loadModernImage;
