import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Card from "../../components/cards/card/Card.svelte";
import { cardFillings } from "../../components/cards/types/CardFilling";
import {
  cardTypes,
  cardTypeDefault,
} from "../../components/cards/types/CardType";
import { iconNames } from "../../icons/types/IconName";

const meta = {
  title: "Cards/Card",
  component: "khao-card",
  tags: ["autodocs"],
  argTypes: {
    filling: {
      control: { type: "select" },
      options: cardFillings,
      type: "string",
      default: "surface",
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
    dismissable: {
      control: { type: "select" },
      options: ["true", "false"],
      type: "string",
    },
  },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filling: "surface",
    type: cardTypeDefault,
    title: "Card Component",
  },
};

export const Primary: Story = {
  args: {
    filling: "primary",
    title: "Primary Card with Title",
  },
};

export const Secondary: Story = {
  args: {
    filling: "secondary",
    title: "Secondary Card with Title",
  },
};

export const Tertiary: Story = {
  render:
    () => `<khao-card filling="tertiary" title="Tertiary Card with Title and Icon" iconName="info">
    This is a tertiary card with a title and an icon. Lporem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </khao-card>`,
};

export const DismissableCard: Story = {
  render:
    () => `<khao-card filling="tertiary" title="Dismissable Card with Title and Icon" dismissable="true" iconName="info">
    This is a dismissable card with a title and an icon. Lporem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </khao-card>`,
};

export const instagramExample: Story = {
  render:
    () => `<khao-card filling="primary" title="Hast du es ausprobiert?" iconName="instagram">
    Dann mach doch ein schickes Bild von deiner Kreation und poste es auf Instagram mit dem Hashtag #derReiskoch und erwähne meinen Account @der.reiskoch. Ich bin schon sehr gespannt auf dein Bild!
  </khao-card>`,
};

export const doItYourselfExample: Story = {
  args: {
    filling: "secondary",
    title: "Do it yourself",
    iconName: "mortar-pestle",
  },
};

export const fastAlternativeExample: Story = {
  args: {
    filling: "tertiary",
    title: "A fast alternative",
    iconName: "fast",
  },
};

export const veggieAlternativeExample: Story = {
  args: {
    filling: "primary",
    title: "A veggie alternative",
    iconName: "leaf",
  },
};
