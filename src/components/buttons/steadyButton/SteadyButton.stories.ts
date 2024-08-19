import type { Meta, StoryObj } from "@storybook/web-components-vite";
import SteadyButton from "./SteadyButton.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Buttons/SteadyButton",
  component: "khao-button-steady",
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      type: "string",
    },
    user: {
      control: "text",
      type: "string",
    },
    lang: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<SteadyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: "Unterstütze meinen Blog über Steady",
    user: "der-reiskoch",
    lang: "de",
  },
};
