import type { Meta, StoryObj } from "@storybook/svelte-vite";
import IconButton from "./IconButton.svelte";
import {
  buttonPriorities,
  buttonPriorityDefault,
} from "../types/ButtonPriority";
import { iconNames } from "../../../icons/types/IconName";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Buttons/IconButton",
  component: "khao-icon-button",
  tags: ["autodocs"],
  argTypes: {
    customBGColor: { control: "color" },
    customColor: { control: "color" },
    priority: {
      control: { type: "select" },
      options: buttonPriorities,
      default: buttonPriorityDefault,
    },
    iconName: {
      control: { type: "select" },
      options: iconNames,
    },
    circle: {
      control: { type: "select" },
      options: ["true", "false"],
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
} satisfies Meta<IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Primary with Printer",
    priority: "primary",
    iconName: "printer",
    circle: "false",
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

export const Circle: Story = {
  args: {
    title: "Primary Circle",
    priority: "primary",
    iconName: "arrow-up",
    circle: "true",
  },
};
