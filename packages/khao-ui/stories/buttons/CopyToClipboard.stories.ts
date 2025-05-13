import type { Meta, StoryObj } from "@storybook/web-components-vite";
import CopyToClipboard from "../../src/components/buttons/copyToClipboard/CopyToClipboard.svelte";
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
    priority: {
      control: { type: "select" },
      options: buttonPriorities,
      default: buttonPriorityDefault,
    },
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
    copyFrom: {
      control: "text",
      type: "string",
    },
    customMinWidth: { control: "text", type: "string" },
  },
} satisfies Meta<CopyToClipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const textToCopy: Story = {
  args: {
    priority: "primary",
    label: "Copy",
    iconName: "copy",
    textToCopy: "The Great Copycat",
  },
};

interface renderProps {
  priority: string;
  size: string;
  label: string;
  iconName: string;
  textToCopy: string;
  copyFrom: string;
}

export const copyFrom: Story = {
  args: {
    priority: "tertiary",
    label: "Copy",
    iconName: "copy",
    size: "medium",
    textToCopy:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    copyFrom: "js-copy-src",
  },

  render: (props: renderProps) => {
    const formContent = `<form>
       
      <label>Text to Copy <textarea id="js-copy-src" rows="5">${props.textToCopy}</textarea></label>
      </form>`;

    return `${formContent}
     <div style="margin-top: 1rem">
      <khao-copy-to-clipboard
        label="${props.label}"
        iconName="${props.iconName}" 
        copyFrom="${props.copyFrom}"
        size="${props.size}"
        ></khao-copy-to-clipboard></div>`;
  },
};
