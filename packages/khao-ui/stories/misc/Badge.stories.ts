import type { Meta, StoryObj } from "@storybook/web-components-vite";
import StarBadge from "../../src/components/misc/badge/Badge.svelte";

import {
  bagdePriorities,
  badgePriorityDefault,
} from "../../src/components/misc/badge/types/BadgePriority";

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
