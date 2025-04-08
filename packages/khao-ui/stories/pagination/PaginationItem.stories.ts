import type { Meta, StoryObj } from "@storybook/web-components-vite";
import PaginationItem from "../../src/components/pagination/paginationItem/PaginationItem.svelte";

const meta = {
  title: "Pagination/Pagination Item",
  component: "khao-pagination-item",
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
    disabled: {
      control: { type: "boolean" },
      type: "Boolean",
    },
  },
} satisfies Meta<PaginationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    title: "Page 1",
    label: "1",
    active: false,
  },
};

export const Active: Story = {
  args: {
    href: "/",
    title: "Page 3",
    label: "3",
    active: true,
  },
};


export const TwoDigits: Story = {
  args: {
    href: "/",
    title: "Page 88",
    label: "88",
    active: false,
  },
};

export const ThreeDigits: Story = {
  args: {
    href: "/",
    title: "Page 999",
    label: "999",
    active: false,
  },
};

export const IvalidValue: Story = {
  args: {
    href: "/",
    title: "Page 1000",
    label: "1000",
    active: false,
  },
};

export const Forward: Story = {
  args: {
    href: "/",
    title: "Last Page",
    label: ">>",
    active: false,
  },
};


export const DisabledEllipsis: Story = {
  args: {
    href: "/",
    title: "Nothing here",
    label: "...",
    active: false,
    disabled: true,
  },
};
