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
    title: "Tab",
    label: "Tab",
    active: false,
    size: tabSizeDefault,
  },
};

export const SizeCompact: Story = {
  args: {
    href: "/",
    title: "33",
    label: "33",
    active: false,
    size: "compact",
  },
};

export const SizeMedium: Story = {
  args: {
    href: "/",
    title: "Medium",
    label: "Medium",
    active: false,
    size: "medium",
  },
};

export const SizeLarge: Story = {
  args: {
    href: "/",
    title: "A Large Tab",
    label: "A Large Tab",
    active: false,
    size: "large",
  },
};

export const SizeFlex: Story = {
  args: {
    href: "/",
    title: "A Single Tab with flex size",
    label: "A Single Tab with flex size",
    active: false,
    size: "flex",
  },
};
