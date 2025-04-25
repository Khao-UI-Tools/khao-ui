import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Textfield from "../../src/components/forms/textfield/TextField.svelte";
import {
  textFieldTypes,
  textFieldTypeDefault,
} from "../../src/components/forms/types/TextFieldType";
import { iconNames } from "../../src/icons/types/IconName";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "forms/Textfield",
  component: "khao-text-field",
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
    placeholder: {
      control: "text",
      type: "string",
    },
    id: {
      control: "text",
      type: "string",
    },
    type: {
      control: { type: "select" },
      options: textFieldTypes,
      default: textFieldTypeDefault,
    },
    iconName: {
      control: { type: "select" },
      options: iconNames,
    },
    autofocus: {
      control: "boolean",
      type: "boolean",
    },
    disabled: {
      control: "boolean",
      type: "boolean",
    },
  },
} satisfies Meta<Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autofocus: Story = {
  args: {
    label: "Textfield (Autofocus)",
    value: "A value",
    type: "text",
    id: "field1",
    autofocus: "true",
  },
};

export const Number: Story = {
  args: {
    label: "Numberfield",
    value: "13455",
    type: "number",
  },
};
export const Search: Story = {
  args: {
    label: "Searchfield",
    value: "",
    placeholder: "What are you looking for?",
    type: "search",
    disabled: "false",
  },
};

export const Disabled: Story = {
  args: {
    label: "Textfield (Disabled)",
    value: "A value",
    type: "text",
    id: "field1",
    disabled: "true",
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

export const OutputWithIcon: Story = {
  args: {
    label: "Translation",
    value: "Tom Pla Muek",
    type: "output",
    iconName: "translation",
  },
};

export const OutputWithLongText: Story = {
  args: {
    label: "Long Output",
    value: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    type: "output",
  },
};

export const InputWithLongText: Story = {
  args: {
    label: "Long Output",
    value: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
};
