import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Icon from "../../src/icons/Icon.svelte";
import { iconNames } from "../../src/icons/types/IconName";
import { iconSizeFactors, iconSizeFactorDefault } from "../../src/icons/types/IconSizeFactor";
import { iconOpacities, iconOpacityDefault } from "../../src/icons/types/IconOpacity";

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
