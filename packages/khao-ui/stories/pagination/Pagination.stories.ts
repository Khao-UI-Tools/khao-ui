import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Pagination from "../../src/components/pagination/pagination/Pagination.svelte";

const meta = {
  title: "Pagination/Pagination",
  component: "khao-pagination",
  tags: ["autodocs"],
  argTypes: {
    urlPrefix: {
      control: "text",
      type: "string",
    },
    currentPage: {
      control: "text",
      type: "number",
    },
    totalPages: {
      control: "text",
      type: "number",
    },
  },
} satisfies Meta<Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/seite/",
    currentPage: 2,
    totalPages: 10,
  },
};

export const noDisplayOnlyOnePage: Story = {
  args: {
    href: "/seite/",
    currentPage: 1,
    totalPages: 1,
  },
};

export const lessThen10Pages: Story = {
  args: {
    href: "/seite/",
    currentPage: 4,
    totalPages: 8,
  },
};

export const moreThen10Pages: Story = {
  args: {
    href: "/seite/",
    currentPage: 5,
    totalPages: 19,
  },
};
