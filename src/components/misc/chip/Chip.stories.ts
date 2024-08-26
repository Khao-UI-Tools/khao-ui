import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Chip from "./Chip.svelte";
import { chipFillings, chipFillingDefault } from "./types/ChipFilling";
import { chipTypes, chipTypeDefault } from "./types/ChipType";
import { iconNames } from "../../../icons/types/IconName";

const meta = {
  title: "Misc/Chip",
  component: "khao-chip",
  tags: ["autodocs"],
  argTypes: {
    filling: {
      control: { type: "select" },
      options: chipFillings,
      type: "string",
      default: chipFillingDefault,
    },
    type: {
      control: { type: "select" },
      options: chipTypes,
      type: "string",
      default: chipTypeDefault,
    },
    title: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filling: chipFillingDefault,
    type: chipTypeDefault,
    title: "Chip Component",
    slot: "Blubb",
  },
};

export const Primary: Story = {
  args: {
    filling: "primary",
  },
};

export const Secondary: Story = {
  args: {
    filling: "secondary",
    title: "Secondary Chip with Title",
  },
};

export const Tertiary: Story = {
  args: {
    filling: "tertiary",
    title: "Tertiary Chip with Title and Icon",
  },
};
