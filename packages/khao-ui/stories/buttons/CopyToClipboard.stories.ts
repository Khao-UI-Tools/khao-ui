import type { Meta, StoryObj } from "@storybook/web-components-vite";
import CopyToClipboard from "../../src/components/buttons/copyToClipboard/CopyToClipboard.svelte";
import { fn } from "@storybook/test";
import { iconNames } from "../../src/icons/types/IconName";
import {
  buttonPriorities,
  buttonPriorityDefault,
} from "../../src/components/buttons/types/ButtonPriority";
import { buttonSizes } from "../../src/components/buttons/types/ButtonSize";

const meta = {
  title: "Buttons/CopyToClipboard",
  component: "khao-copy-to-clipboard",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: buttonSizes,
      default: "medium",
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
    textToCopy: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<CopyToClipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    priority: "primary",
    label: "Copy",
    iconName: "copy",
    textToCopy: "The Great Copycat",
  },
};
