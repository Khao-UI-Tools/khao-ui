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
    value: "a",
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
    ],
  },
};

