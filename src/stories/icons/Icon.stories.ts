import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Icon from "../../icons/Icon.svelte";
import { iconNames } from "../../icons/types/IconName";
import { iconSizeFactors, iconSizeFactorDefault } from "../../icons/types/IconSizeFactor";
import { iconOpacities, iconOpacityDefault } from "../../icons/types/IconOpacity";

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
    opacity: {
      control: { type: "select" },
      options: iconOpacities,
      default: iconOpacityDefault,
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
