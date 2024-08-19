import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Icon from "./Icon.svelte";
import { iconNames } from "../icons/IconName";
import { iconSizeFactors, iconSizeFactorDefault } from "./IconSizeFactor";

const meta = {
  title: "Icons/Icon Component",
  component: "khao-icon",
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: iconNames,
    },
    sizeFactor: {
      control: { type: "select" },
      options: iconSizeFactors,
      default: iconSizeFactorDefault,
    },
  },
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    iconName: "copy",
    sizeFactor: "6",
  },
};
