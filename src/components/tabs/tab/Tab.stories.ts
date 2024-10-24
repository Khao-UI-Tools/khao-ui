import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Tab from "./Tab.svelte";
import { tabSizeDefault, tabSizes } from "../types/TabSize";

const meta = {
  title: "Tabs/Single Tab",
  component: "khao-tab",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      type: "string",
    },
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
    size: {
      control: { type: "select" },
      options: tabSizes,
      default: tabSizeDefault,
    },
  },
} satisfies Meta<Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    title: "A Single Tab",
    label: "A Single Tab",
    active: false,
    size: tabSizeDefault,
  },
};
