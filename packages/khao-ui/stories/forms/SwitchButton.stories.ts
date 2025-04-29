import type { Meta, StoryObj } from "@storybook/web-components-vite";
import SwitchButton from "../../src/components/forms/switchbutton/SwitchButton.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "forms/Switch Button",
  component: "khao-switch-button",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      type: "string",
    },
    activated: {
      control: { type: "select" },
      options: ["true", "false"],
      type: "string",
    },
    htmlId: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<SwitchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Kochmodus",
    htmlId: "field1",
  },
};

export const activated: Story = {
  args: {
    label: "Kochmodus",
    activated: "true",
    htmlId: "field1",
  },
};
