import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Button from "../../components/buttons/Button.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Buttons/Button",
  component: "khao-button",
  tags: ["autodocs"],
  argTypes: {
    customBGColor: { control: "color" },
    customColor: { control: "color" },
    priority: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    iconName: {
      control: { type: "select" },
      options: [
        "cart",
        "external-link",
        "facebook",
        "newsletter",
        "pinterest",
        "printer",
      ], // @see src/components/icons/IconName.ts
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

export const Newsletter: Story = {
  args: {
    priority: "tertiary",
    label: "Newsletter",
    iconName: "newsletter",
  },
};

export const Print: Story = {
  args: {
    priority: "primary",
    label: "Print",
    iconName: "printer",
  },
};

export const CustomColorsExample1: Story = {
  args: {
    label: "Facebook",
    iconName: "facebook",
    customBGColor: "#3b5998",
    customColor: "white",
  },
};

export const CustomColorsExample2: Story = {
  args: {
    label: "Pinterest",
    iconName: "pinterest",
    customBGColor: "rgb(189, 8, 28)",
    customColor: "white",
  },
};