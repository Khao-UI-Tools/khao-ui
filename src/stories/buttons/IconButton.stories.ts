import type { Meta, StoryObj } from "@storybook/svelte-vite";
import IconButton from "../../components/buttons/IconButton.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Buttons/Icon-Button",
  component: "khao-icon-button",
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
        "instagram",
        "newsletter",
        "pinterest",
        "printer",
        "rss",
      ], // @see src/components/icons/IconName.ts
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
} satisfies Meta<IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Primary with Printer",
    priority: "primary",
    iconName: "printer",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary with Cart",
    priority: "secondary",
    iconName: "cart",
  },
};

export const Tertiary: Story = {
  args: {
    title: "Tertiary with Newsletter",
    priority: "tertiary",
    iconName: "newsletter",
  },
};

export const CustomColorsExample: Story = {
  args: {
    iconName: "facebook",
    customBGColor: "#3b5998",
    customColor: "white",
  },
};

export const CustomHoverColorExample: Story = {
  args: {
    iconName: "pinterest",
    priority: "secondary",
    customHoverColor: "#bd081c",
  },
};
