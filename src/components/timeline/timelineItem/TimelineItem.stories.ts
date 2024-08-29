import type { Meta, StoryObj } from "@storybook/web-components-vite";
import TimelineItem from "./TimelineItem.svelte";
import {
  timelineItemSizeDefault,
  timelineItemSizes,
} from "../types/timelineItemSize";

const meta = {
  title: "Timeline/Timeline Item",
  component: "khao-timeline-item",
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      type: "string",
    },
    title: {
      control: "text",
      type: "string",
    },
    size: {
      control: { type: "select" },
      options: timelineItemSizes,
      type: "string",
      default: timelineItemSizeDefault,
    },

    active: {
      control: { type: "boolean" },
      type: "Boolean",
    },
  },
} satisfies Meta<TimelineItem>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  href: string;
  title: string;
  size: string;
  active: boolean;
  slot: string;
}

const render = (props: renderProps): string => {
  return `<khao-timeline-item href="${props.href}" title="${props.title}" size="${props.size}" active="${props.active || "false"}"><span>${props.slot}</span></khao-timeline-item>`;
};

export const Default: Story = {
  args: {
    href: "/",
    title: "Erster Eintrag",
    slot: "1",
    active: false,
    size: timelineItemSizeDefault,
  },
  render: render,
};

export const TextExample: Story = {
  args: {
    href: "/",
    title: "Website Eintrag",
    slot: "Websites",
    active: false,
  },
  render: render,
};

export const Active: Story = {
  args: {
    href: "/",
    title: "Website Eintrag",
    active: true,
    slot: "Websites",
  },
  render: render,
};
