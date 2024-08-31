import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Tab from "./Tab.svelte";

const meta = {
  title: "Tabs/Single Tab",
  component: "khao-tab",
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
      control: { type: "boolean" },
      type: "Boolean",
    },
  },
} satisfies Meta<Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  href: string;
  title: string;
  active: boolean;
  slot: string;
}

const render = (props: renderProps): string => {
  return `<khao-tab href="${props.href}" title="${props.title}" active="${props.active || "false"}"><span>${props.slot}</span></khao-tab>`;
};

export const Default: Story = {
  args: {
    href: "/",
    title: "A Single Tab",
    slot: "A Single Tab",
    active: false,
  },
  render: render,
};
