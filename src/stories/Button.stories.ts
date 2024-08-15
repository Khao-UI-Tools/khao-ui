import type { Meta, StoryObj } from "@storybook/svelte";
import Button from "../components/buttons/Button.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Khao-UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    customBGColor: { control: "color" },
    customColor: { control: "color" },
    priority: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    label: {
      control: "text",
      type: "string",
    },
    title: {
      control: "text",
      type: "string",
    },
    href: {
      control: "text",
      type: "string",
    },
    rel: {
      control: "text",
      type: "string",
    },
    target: {
      control: "text",
      type: "string",
    },
    onClick: {
      type: "function",
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    priority: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    priority: "secondary",
    label: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    priority: "tertiary",
    label: "Tertiary Button",
  },
};
