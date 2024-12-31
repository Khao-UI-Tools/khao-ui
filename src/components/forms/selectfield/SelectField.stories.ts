import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Selectfield from "./SelectField.svelte";
import { type Option } from "../types/Option";

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
    value: {
      control: "text",
      type: "string",
    },
    allowEmpty: {
      ontrol: "boolean",
      type: "boolean",
    },
    options: {
      control: "object",
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
    options: [
      {
        label: "Eins",
        value: "1",
      },
      {
        label: "Zwei",
        value: "2",
      },
      {
        label: "Drei",
        value: "3",
      },
      {
        label: "Vier",
        value: "4",
      },
    ],
  },
};
export const SelectedValue: Story = {
  args: {
    label: "Selected Value",
    id: "field2",
    value: "3",
    options: [
      {
        label: "Eins",
        value: "1",
      },
      {
        label: "Zwei",
        value: "2",
      },
      {
        label: "Drei",
        value: "3",
      },
      {
        label: "Vier",
        value: "4",
      },
    ],
  },
};

export const AllowEmpty: Story = {
  args: {
    label: "Allow Empty",
    value: "",
    id: "field3",
    allowEmpty: true,
    options: [
      {
        label: "Eins",
        value: "1",
      },
      {
        label: "Zwei",
        value: "2",
      },
      {
        label: "Drei",
        value: "3",
      },
      {
        label: "Vier",
        value: "4",
      },
    ],
  },
};
export const LongLabels: Story = {
  args: {
    label: "Long Labels",
    value: "1",
    id: "field4",
    options: [
      {
        label: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        value: "1",
      },
      {
        label: "sed diam nonumy eirmod tempor invidunt ut l",
        value: "2",
      },
    ],
  },
};

