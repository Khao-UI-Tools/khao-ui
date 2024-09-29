import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Button from "./Button.svelte";
import { fn } from "@storybook/test";
import { iconNames } from "../../../icons/types/IconName";
import {
  buttonPriorities,
  buttonPriorityDefault,
} from "../types/ButtonPriority";
import { buttonSizes, buttonSizeDefault } from "../types/ButtonSize";

const meta = {
  title: "Buttons/Button",
  component: "khao-button",
  tags: ["autodocs"],
  argTypes: {
    customBGColor: { control: "color" },
    customColor: { control: "color" },
    customMinWidth: { control: "text", type: "string" },
    priority: {
      control: { type: "select" },
      options: buttonPriorities,
      default: buttonPriorityDefault,
    },
    size: {
      control: { type: "select" },
      options: buttonSizes,
      default: buttonSizeDefault,
    },
    iconName: {
      control: { type: "select" },
      options: iconNames,
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
    onClick: fn(),
  },
};

export const PrimaryCompact: Story = {
  args: {
    priority: "primary",
    size: "compact",
    label: "Karten App",
    iconName: "location",
    onClick: fn(),
  },
};

export const SecondaryLarge: Story = {
  args: {
    priority: "secondary",
    size: "large",
    label: "Secondary Button",
    onClick: fn(),
  },
};

export const Tertiary: Story = {
  args: {
    priority: "tertiary",
    label: "Tertiary Button",
    onClick: fn(),
  },
};

export const Newsletter: Story = {
  args: {
    priority: "tertiary",
    label: "Newsletter",
    iconName: "newsletter",
    onClick: fn(),
  },
};

export const Print: Story = {
  args: {
    priority: "primary",
    label: "Print",
    iconName: "printer",
    onClick: fn(),
  },
};

export const CustomColorsExample1: Story = {
  args: {
    label: "Facebook",
    iconName: "facebook",
    customBGColor: "#3b5998",
    customColor: "white",
    onClick: fn(),
  },
};

export const CustomColorsExample2: Story = {
  args: {
    label: "Pinterest",
    iconName: "pinterest",
    customBGColor: "rgb(189, 8, 28)",
    customColor: "white",
    onClick: fn(),
  },
};

export const CustomMinWidthExample: Story = {
  args: {
    label: "Wide Button",
    customMinWidth: "400px",
    onClick: fn(),
  },
};
