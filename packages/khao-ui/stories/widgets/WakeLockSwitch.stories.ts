import type { Meta, StoryObj } from "@storybook/web-components-vite";
import WakeLockSwitch from "../../src/components/widgets/wakeLockSwitch/WakeLockSwitch.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "widgets/WakeLockSwitch",
  component: "khao-wake-lock-switch",
  tags: ["autodocs"],
  argTypes: {
    label: { type: "string" },
    description: { type: "string" },
  },
} satisfies Meta<WakeLockSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Kochmodus",
    description:
      "Der Kochmodus deaktiviert den Ruhezustand, falls dies auf deinem Gerät möglich ist, damit du mein Rezept ganz in Ruhe ausprobieren kannst.",
  },
};
