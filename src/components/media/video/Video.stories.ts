import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Video from "./Video.svelte";

const meta = {
  title: "Media/Video",
  component: "khao-video",
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["youtube"],
      type: "string",
    },
    autoplay: {
      control: { type: "select" },
      options: ["true", "false"],
      type: "string",
    },
    startTime: {
      control: "text",
      type: "string",
      description: "Start time in seconds",
    },
    awaitsConsent: {
      control: { type: "select" },
      options: ["true", "false"],
      type: "string",
    },
    videoId: {
      control: "text",
      type: "string",
    },
    previewSrc: {
      control: "text",
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
  },
} satisfies Meta<Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoId: "uIwy020UD7E",
    title: "Video",
    caption: "A Video",
  },
};

export const WithConsent: Story = {
  args: {
    videoId: "uIwy020UD7E",
    awaitsConsent: "true",
    autoplay: "true",
    consentText:
      "Mit dem Aufruf des Videos erklärst Du Dich einverstanden, dass Deine Daten an YouTube übermittelt werden und dass du die Datemschutzerklärung gelesen hast.",
    previewSrc: "https://api.koch-reis.de/youtube/v1/?file=uIwy020UD7E.jpg",
    title: "Video",
    caption: "A Video with consent",
  },
};

export const WithShortConsent: Story = {
  args: {
    videoId: "dy4UB5KFTIE",
    previewSrc: "https://api.koch-reis.de/youtube/v1/?file=dy4UB5KFTIE.jpg",
    awaitsConsent: "true",
    autoplay: "true",
    consentText:
      "Mit dem Aufruf des Videos erklärst Du Dich einverstanden, dass Deine Daten an YouTube übermittelt werden.",
    title: "Video",
    caption: "Another Video with consent",
  },
};

export const WithStartTime: Story = {
  args: {
    videoId: "-rD6V79-M4I",
    autoplay: "false",
    title: "Video",
    startTime: "1880",
    caption: "Video with startTime",
  },
};
