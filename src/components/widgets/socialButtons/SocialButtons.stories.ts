import type { Meta, StoryObj } from "@storybook/web-components-vite";
import SocialButtons from "./SocialButtons.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "widgets/SocialButtons",
  component: "khao-social-buttons",
  tags: ["autodocs"],
  argTypes: {
    newsletterTitle: { control: "text", type: "string" },
    newsletterUrl: { control: "text", type: "string" },
    facebookTitle: { control: "text", type: "string" },
    facebookUrl: { control: "text", type: "string" },
    instagramTitle: { control: "text", type: "string" },
    instagramUrl: { control: "text", type: "string" },
    pinterestTitle: { control: "text", type: "string" },
    pinterestUrl: { control: "text", type: "string" },
    rssTitle: { control: "text", type: "string" },
    rssUrl: { control: "text", type: "string" },
  },
} satisfies Meta<SocialButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
