import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Card from "./Card.svelte";
import { cardFillings, cardFillingDefault } from "../types/CardFilling";
import { cardTypes, cardTypeDefault } from "../types/CardType";
import { iconNames } from "../../../icons/types/IconName";

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
    title: {
      control: "text",
      type: "string",
    },
    iconName: {
      control: { type: "select" },
      options: iconNames,
      type: "string",
    },
  },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filling: cardFillingDefault,
    type: cardTypeDefault,
    title: "Card Component",
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
    title: "Secondary Card with Title",
  },
};

export const Tertiary: Story = {
  args: {
    filling: "tertiary",
    title: "Tertiary Card with Title and Icon",
    iconName: "info",
  },
};

export const instagramExample: Story = {
  render:
    () => `<khao-card filling="primary" title="Hast du es ausprobiert?" iconName="instagram">
    Dann mach doch ein schickes Bild von deiner Kreation und poste es auf Instagram mit dem Hashtag #derReiskoch und erwähne meinen Account @der.reiskoch. Ich bin schon sehr gespannt auf dein Bild!
  </khao-card>`,
};
