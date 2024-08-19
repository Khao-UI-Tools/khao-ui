import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Card from "./Card.svelte";
import { cardFillings, cardFillingDefault } from "../types/CardFilling";
import { cardTypes, cardTypeDefault } from "../types/CardType";

const meta = {
  title: "Cards/Card",
  component: "khao-card",
  tags: ["autodocs"],
  argTypes: {
    filling: {
      control: { type: "select" },
      options: cardFillings,
      type: "string",
      default: cardFillingDefault,
    },
    type: {
      control: { type: "select" },
      options: cardTypes,
      type: "string",
      default: cardTypeDefault,
    },
  },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filling: cardFillingDefault,
    type: cardTypeDefault,
  },
};

export const Primary: Story = {
  args: {
    filling: "primary",
  },
};

export const Secondary: Story = {
  args: {
    filling: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    filling: "tertiary",
  },
};
