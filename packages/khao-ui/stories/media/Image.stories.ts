import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Image from "../../src/components/media/image/Image.svelte";
import { imageTypes } from "../../src/components/media/image/types/ImageType";

const meta = {
  title: "Media/Image",
  component: "khao-image",
  argTypes: {
    src: {
      control: "text",
      type: "string",
    },
    lazyLoading: {
      control: { type: "select" },
      options: ["true", "false"],
      type: "string",
    },
    loadingAnimation: {
      control: { type: "select" },
      options: ["true", "false"],
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
      default: "default",
    },
  },
} satisfies Meta<Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/_thaiindex/y/yam_hed_mhu_sap_gung.jpg",
    title: "An image",
    caption: "An Image with caption",
    type: "default",
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
    src: "https://bilder.koch-reis.de/media/_thaiindex/y/yam_hed_mhu_sap_gung.jpg",
    title: "An image that tries to load the webp version of the src",
    caption: "A .jpg image that tries to load it's webp version",
    type: "default",
    webp: "true",
  },
};

export const PngWithWebp: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/_links/thai_kueche_und_ihre_rezepte.png",
    title: "An image that tries to load the webp version of the image",
    caption: "A .png image that tries to load it's webp version",
    type: "default",
    webp: "true",
  },
};

export const SVG: Story = {
  args: {
    src: "https://www.der-reiskoch.de/svg/logo/logo.svg",
    title: "An SVG image",
    caption: "A .svg image",
    width: "220px",
    height: "220px",
    type: "default",
    webp: "false",
  },
};

export const LazyLoadedImage: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/1300/1333/00_markt_in_ranong.jpg",
    title: "An image that is lazyloaded",
    lazyLoading: "true",
    caption: "An image that is lazyloaded",
    type: "default",
  },
};

export const LazyLoadedWithWebp: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/1200/1263/collage.jpg",
    title: "An image that has webp and is lazyloaded",
    lazyLoading: "true",
    caption: "An image that has webp and is lazyloaded",
    type: "default",
    webp: "true",
  },
};

export const SmallLazyLoadedWithWebp: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/1200/1263/collage.jpg",
    title: "An image that has webp and is lazyloaded",
    lazyLoading: "true",
    width: "300px",
    height: "240px",
    caption: "A small image that has webp and is lazyloaded",
    type: "default",
    webp: "true",
  },
};

export const WithoutLoadingAnimation: Story = {
  args: {
    src: "https://bilder.koch-reis.de/media/1100/1106/curry_garkueche_auf_dem_chatuchak_markt.jpg",
    title: "Without Loading Animation",
    lazyLoading: "true",
    caption: "Without Loading Animation",
    type: "default",
    loadingAnimation: "false",
  },
};

export const BrokenImage: Story = {
  args: {
    src: "https://bilder.koch-reis.de/broken.jpg",
    title: "A broken Image",
    lazyLoading: "true",
    caption: "A broken Image",
    type: "default",
  },
};
