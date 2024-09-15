import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Image from "./Image.svelte";
import { imageTypes, imageTypeDefault } from "./types/ImageType";
import lazyLoadImage from "./utils/loaders/loadImage";

const meta = {
  title: "Misc/Image",
  component: "khao-image",
  argTypes: {
    src: {
      control: "text",
      type: "string",
    },
    lazyloadSrc: {
      control: "text",
      type: "string",
    },
    lazyloadThreshold: {
      control: "text",
      type: "string",
    },
    webp: {
      control: { type: "select" },
      options: ["true", "false"],
      type: "string",
    },
    title: {
      control: "text",
      type: "string",
    },
    caption: {
      control: "text",
      type: "string",
    },
    width: {
      control: "text",
      type: "string",
    },
    height: {
      control: "text",
      type: "string",
    },
    type: {
      control: { type: "select" },
      options: imageTypes,
      default: imageTypeDefault,
    },
  },
} satisfies Meta<Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/_thaiindex/yam_hed.jpg",
    title: "An image",
    caption: "An Image with caption",
    type: imageTypeDefault,
    webp: "false",
  },
};

export const Elevated: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/1300/1361/00_yakitoriy_spiesse.jpg",
    title: "An elevated image",
    type: "elevated",
    webp: "false",
  },
};

export const ElevatedWithCaption: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/0900/0903/eine_schuessel_curry.jpg",
    title: "An elevated image with caption",
    caption: "This is a caption",
    type: "elevated",
    webp: "false",
  },
};

export const JpgWithWebp: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/_thaiindex/yam_hed.jpg",
    title: "An image that tries to load the webp version of the src",
    caption: "A .jpg image that tries to load it's webp version",
    type: imageTypeDefault,
    webp: "true",
  },
};

export const PngWithWebp: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/_links/thai_kueche_und_ihre_rezepte.png",
    title: "An image that tries to load the webp version of the image",
    caption: "A .png image that tries to load it's webp version",
    type: imageTypeDefault,
    webp: "true",
  },
};

export const LazyLoadedImage: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/1300/1333/00_markt_in_ranong.jpg",
    title: "An image that is lazyloaded",
    lazyloadSrc: "https://www.der-reiskoch.de/img/lazy-loading.png",
    caption: "An image that is lazyloaded",
    type: imageTypeDefault,
  },
};

export const LazyLoadedWithWebp: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/1200/1263/collage.jpg",
    title: "An image that has webp and is lazyloaded",
    lazyloadSrc: "https://www.der-reiskoch.de/img/lazy-loading.png",
    caption: "An image that has webp and is lazyloaded",
    type: imageTypeDefault,
    webp: "true",
  },
};


export const SmallLazyLoadedWithWebp: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/1200/1263/collage.jpg",
    title: "An image that has webp and is lazyloaded",
    lazyloadSrc: "https://www.der-reiskoch.de/img/lazy-loading.png",
    lazyLoadThreshold: "220px",
    width: "300px",
    height: "240px",
    caption: "A small image that has webp and is lazyloaded",
    type: imageTypeDefault,
    webp: "true",
  },
};
