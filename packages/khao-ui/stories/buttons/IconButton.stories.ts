import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { fn } from "@storybook/test";
import IconButton from "../../src/components/buttons/iconButton/IconButton.svelte";
import {
  buttonPriorities,
  buttonPriorityDefault,
} from "../../src/components/buttons/types/ButtonPriority";
import { iconNames } from "../../src/icons/types/IconName";
import { buttonSizes } from "../../src/components/buttons/types/ButtonSize";

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
    size: {
      control: { type: "select" },
      options: buttonSizes,
      default: "medium",
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

export const PrimaryLarge: Story = {
  args: {
    title: "Primary with Printer",
    priority: "primary",
    iconName: "printer",
    circle: "false",
    size: "large",
    onClick: fn(),
  },
};

export const SecondaryMedium: Story = {
  args: {
    title: "Secondary with Cart",
    priority: "secondary",
    iconName: "cart",
    size: "medium",
    onClick: fn(),
  },
};

export const TertiaryCompact: Story = {
  args: {
    title: "Tertiary with Newsletter",
    priority: "tertiary",
    iconName: "newsletter",
    size: "compact",
    onClick: fn(),
  },
};

export const CustomColorsExample: Story = {
  args: {
    iconName: "facebook",
    customBGColor: "#3b5998",
    customColor: "white",
    onClick: fn(),
  },
};

export const CustomHoverColorExample: Story = {
  args: {
    iconName: "pinterest",
    priority: "secondary",
    customHoverColor: "#bd081c",
    onClick: fn(),
  },
};

export const Circle: Story = {
  args: {
    title: "Primary Circle",
    priority: "primary",
    iconName: "arrow-up",
    circle: "true",
    onClick: fn(),
  },
};
