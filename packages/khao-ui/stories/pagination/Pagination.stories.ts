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
    titlePrefix: {
      control: "text",
      type: "string",
    },
    currentPage: {
      control: "number",
      type: "number",
    },
    totalPages: {
      control: "number",
      type: "number",
    },
  },
} satisfies Meta<Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    urlPrefix: "/seite/",
    titlePrefix: "Seite",
    currentPage: 2,
    totalPages: 6,
  },
};

export const onlyOnePageNoDisplay: Story = {
  args: {
    urlPrefix: "/seite/",
    titlePrefix: "Seite",
    currentPage: 1,
    totalPages: 1,
  },
};

export const lessThen9Pages: Story = {
  args: {
    urlPrefix: "/seite/",
    titlePrefix: "Seite",
    currentPage: 4,
    totalPages: 8,
  },
};

export const exact9Pages: Story = {
  args: {
    urlPrefix: "/seite/",
    titlePrefix: "Seite",
    currentPage: 4,
    totalPages: 9,
  },
};

export const moreThen9Pages: Story = {
  args: {
    urlPrefix: "/seite/",
    titlePrefix: "Seite",
    currentPage: 5,
    totalPages: 10,
  },
};

export const farMoreThen9Pages: Story = {
  args: {
    urlPrefix: "/seite/",
    titlePrefix: "Seite",
    currentPage: 11,
    totalPages: 19,
  },
};
