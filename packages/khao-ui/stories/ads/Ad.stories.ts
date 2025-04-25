import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Ad from "../../src/components/ads/ad/Ad.svelte";

const meta = {
  title: "Ads/Ad",
  component: "khao-ad",
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      type: "string",
    },
    url: {
      control: "text",
      type: "string",
    },
    imageUrl: {
      control: "text",
      type: "string",
    },
    hasWebP: {
      control: { type: "select" },
      options: ["true", "false"],
      type: "string",
    },
  },
} satisfies Meta<Ad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "Advertisement",
    url: "/",
    imageUrl: "dummy-ad.jpg",
    imageWidth: "350px",
    imageTitle: "Dummy Image",
    imageCaption: "A dummy advertisement",
    onError: () => {
      alert("error");
    },
  },
};

export const WithWebp: Story = {
  args: {
    title: "Advertisement (with webP)",
    url: "/",
    imageUrl: "dummy-ad.jpg",
    imageWidth: "350px",
    imageTitle: "Dummy Image with webP",
    imageCaption: "A dummy advertisement",
    hasWebP: "true",
    onError: () => {
      alert("error");
    },
  },
};
