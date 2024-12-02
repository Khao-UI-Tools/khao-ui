import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Ad from "./Ad.svelte";

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
  },
} satisfies Meta<Ad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "Werbung",
    url: "/",
    imageUrl: "https://placehold.co/200x200?text=Werbung&font=montserrat",
    imageWidth: "200px",
    imageTitle: "Dummy Image",
    imageCaption: "A dummy advertisement",
    onError: () => {
      alert("error");
    },
  },
};
