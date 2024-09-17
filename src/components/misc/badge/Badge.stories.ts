import type { Meta, StoryObj } from "@storybook/svelte-vite";
import StarBadge from "./Badge.svelte";

import { bagdePriorities, badgePriorityDefault } from "./types/BadgePriority";

const meta = {
  title: "Misc/Badge",
  component: "khao-badge",
  tags: ["autodocs"],
  argTypes: {
    mainLabel: {
      control: "text",
      type: "string",
    },
    secondaryLabel: {
      control: "text",
      type: "string",
    },
    priority: {
      control: { type: "select" },
      options: bagdePriorities,
      default: badgePriorityDefault,
    },
  },
} satisfies Meta<StarBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mainLabel: "555",
    secondaryLabel: "Dishes",
    priority: "primary",
  },
};
