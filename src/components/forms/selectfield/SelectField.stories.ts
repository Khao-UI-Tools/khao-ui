import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Selectfield from "./SelectField.svelte";
import options from "./options.json";
import optionsWithLongLabels from "./options_with_long_labels.json";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "forms/Selectfield",
  component: "khao-ui-selectfield",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      type: "string",
    },
    selectedValue: {
      control: "text",
      type: "string",
    },
    allowEmpty: {
      ontrol: "boolean",
      type: "boolean",
    },
    options: {
      control: "text",
      type: "string",
    },
    id: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<Selectfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Selectfield",
    id: "field1",
    options: JSON.stringify(options),
  },
};
export const SelectedValue: Story = {
  args: {
    label: "Selected Value",
    id: "field2",
    selectedValue: "3",
    options: JSON.stringify(options),
  },
};

export const AllowEmpty: Story = {
  args: {
    label: "Allow Empty",
    value: "",
    id: "field3",
    allowEmpty: true,
    options:  JSON.stringify(options),
  },
};
export const LongLabels: Story = {
  args: {
    label: "Long Labels",
    selectedValue: "2",
    id: "field4",
    options:  JSON.stringify(optionsWithLongLabels),
  },
};

