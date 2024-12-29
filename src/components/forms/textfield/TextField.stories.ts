import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Textfield from "./TextField.svelte";
import { textFieldTypes, textFieldTypeDefault } from "../types/TextFieldType";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "forms/Textfield",
  component: "khao-textfield",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      type: "string",
    },
    value: {
      control: "text",
      type: "string",
    },
    type: {
      control: { type: "select" },
      options: textFieldTypes,
      default: textFieldTypeDefault,
    },
  },
} satisfies Meta<Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Textfield",
    value: "A value",
    type: "text",
  },
};

export const Number: Story = {
  args: {
    label: "Numberfield",
    value: "13455",
    type: "number",
  },
};

export const Output: Story = {
  args: {
    label: "Output",
    value: "A value",
    type: "output",
  },
};

export const OutputWithThai: Story = {
  args: {
    label: "Thai",
    value: "ต้มปลาหมึก",
    type: "output",
  },
};
