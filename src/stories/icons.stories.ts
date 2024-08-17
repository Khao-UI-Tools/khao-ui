import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Icon from "../icons/Icon.svelte";
import { iconNames } from "../icons/IconName";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Icons",
  component: "Icon",
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    iconName: {
      control: { type: "select" },
      options: iconNames,
    },
  },
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;


