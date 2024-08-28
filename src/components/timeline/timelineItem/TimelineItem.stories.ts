import type { Meta, StoryObj } from "@storybook/web-components-vite";
import TimelineItem from "./TimelineItem.svelte";
import { stringBooleans } from "../../../common/types/StringBoolean";

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
    active: {
      control: { type: "select" },
      options: stringBooleans,
      type: "string",
      default: "true",
    },
  },
} satisfies Meta<TimelineItem>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  href: string;
  title: string;
  active: string;
  slot: string;
}

const render = (props: renderProps): string => {
  return `<khao-timeline-item href="${props.href}" title="${props.title}" active="${props.active || "false"}">${props.slot}</khao-timeline-item>`;
};

export const Default: Story = {
  args: {
    href: "/",
    title: "Erster Eintrag",
    slot: "1",
  },
  render: render,
};

export const TextExample: Story = {
  args: {
    href: "/",
    title: "Website Eintrag",
    slot: "Websites",
  },
  render: render,
};

export const Active: Story = {
  args: {
    href: "/",
    title: "Website Eintrag",
    active: "true",
    slot: "Websites",
  },
  render: render,
};
