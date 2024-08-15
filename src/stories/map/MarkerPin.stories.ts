import type { Meta, StoryObj } from "@storybook/web-components-vite";
import MarkerPin from "../../components/map/MarkerPin.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "map/MarkerPin",
  component: "khao-map-marker-pin",
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    iconName: {
      control: { type: "select" },
      options: ["close", "restaurant", "shopping_cart"],
    },
  },
} satisfies Meta<MarkerPin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restaurant: Story = {
  args: {
    color: "#ff9900",
    iconName: "restaurant",
  },
};

export const Shop: Story = {
  args: {
    color: "#249b57",
    iconName: "shopping_cart",
  },
};

export const Closed: Story = {
  args: {
    color: "#cccccc",
    iconName: "close",
  },
};
