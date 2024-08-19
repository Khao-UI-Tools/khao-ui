import type { Meta, StoryObj } from "@storybook/web-components-vite";
import NoticeCard from "./NoticeCard.svelte";
import { noticeTypes, noticeTypeDefault } from "./NoticeTypes";

const meta = {
  title: "Cards/NoticeCard",
  component: "khao-card-notice",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: noticeTypes,
      type: "string",
      default: noticeTypeDefault,
    },
    title: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<NoticeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: noticeTypeDefault,
    title: "A default notice card",
  },
};

export const Neutral: Story = {
  args: {
    type: "neutral",
    title: "A neutral notice card",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "A warning notice card",
  },
};
