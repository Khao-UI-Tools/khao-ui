import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Chip from "./Chip.svelte";
import { chipFillings, chipFillingDefault } from "./types/ChipFilling";
import { chipTypes, chipTypeDefault } from "./types/ChipType";

const meta = {
  title: "Misc/Chip",
  component: "khao-chip",
  tags: ["autodocs"],
  argTypes: {
    filling: {
      control: { type: "select" },
      options: chipFillings,
      type: "string",
      default: chipFillingDefault,
    },
    type: {
      control: { type: "select" },
      options: chipTypes,
      type: "string",
      default: chipTypeDefault,
    },
    title: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  filling: string;
  type: string;
  title: string;
  slot: string;
}

const render = (props: renderProps): string => {
  return `<khao-chip type="${props.type || ""}" filling=${props.filling} title="${props.title}">${props.slot}</khao-chip>`;
};

export const Default: Story = {
  args: {
    filling: chipFillingDefault,
    type: chipTypeDefault,
    title: "Chip Component",
    slot: "Thailändisch",
  },
  render: render,
};

export const Primary: Story = {
  args: {
    filling: "primary",
    type: "filled",
    slot: "Primary",
  },
  render: render,
};

export const Secondary: Story = {
  args: {
    filling: "secondary",
    type: "filled",
    title: "Secondary Chip with Title",
    slot: "Secondary",
  },
  render: render,
};

export const Tertiary: Story = {
  args: {
    filling: "tertiary",
    type: "filled",
    title: "Tertiary Chip with Title",
    slot: "Tertiary",
  },
  render: render,
};

export const TagsExample: Story = {
  render: () => {
    const div =
      '<div style="display:flex; flex-wrap: wrap; gap: 0.7rem 0.5rem; width:300px">';

    return `${div}<khao-chip>Thailändisch</khao-chip><khao-chip>Fisch</khao-chip><khao-chip>Schweinefleisch</khao-chip><khao-chip>Indonesisch</khao-chip><khao-chip>Eier</khao-chip><khao-chip>Salat</khao-chip><khao-chip>Burmesisch</khao-chip></div>`;
  },
};
