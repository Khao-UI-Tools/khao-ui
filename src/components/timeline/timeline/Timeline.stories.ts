import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Timeline from "./Timeline.svelte";
import { timelineSizeDefault, timelineSizes } from "../types/timelineSize";

const meta = {
  title: "Timeline/Timeline",
  component: "khao-timeline",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: timelineSizes,
      type: "string",
      default: timelineSizeDefault,
    },
  },
} satisfies Meta<Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  filling: string;
  type: string;
  title: string;
  slot: string;
}

export const PaginationExample: Story = {
  args: {
    size: "large",
  },

  render: (size: string) => {
    return `
          <khao-timeline size="${size}">
            <khao-timeline-item>1</khao-timeline-item>
            <khao-timeline-item>2</khao-timeline-item>
            <khao-timeline-item>3</khao-timeline-item>
            <khao-timeline-item>4</khao-timeline-item>
            <khao-timeline-item>5</khao-timeline-item>
            <khao-timeline-item>6</khao-timeline-item>
            <khao-timeline-item>7</khao-timeline-item>
            <khao-timeline-item>8</khao-timeline-item>
            <khao-timeline-item>9</khao-timeline-item>
            <khao-timeline-item>10</khao-timeline-item>
            <khao-timeline-item>11</khao-timeline-item>
            <khao-timeline-item>12</khao-timeline-item>
            <khao-timeline-item>13</khao-timeline-item>
          <khao-timeline>
      `;
  },
};

export const AlphabetExample: Story = {
  args: {
    size: "large",
  },

  render: (size: string) => {
    return `
          <khao-timeline size="${size}">
            <khao-timeline-item>A</khao-timeline-item>
            <khao-timeline-item>B</khao-timeline-item>
            <khao-timeline-item>C</khao-timeline-item>
            <khao-timeline-item>D</khao-timeline-item>
            <khao-timeline-item>E</khao-timeline-item>
            <khao-timeline-item>F</khao-timeline-item>
            <khao-timeline-item>G</khao-timeline-item>
            <khao-timeline-item>H</khao-timeline-item>
            <khao-timeline-item>I</khao-timeline-item>
            <khao-timeline-item>J</khao-timeline-item>
            <khao-timeline-item>K</khao-timeline-item>
            <khao-timeline-item>L</khao-timeline-item>
            <khao-timeline-item>M</khao-timeline-item>
            <khao-timeline-item>N</khao-timeline-item>
            <khao-timeline-item>O</khao-timeline-item>
            <khao-timeline-item>P</khao-timeline-item>
            <khao-timeline-item>Q</khao-timeline-item>
            <khao-timeline-item>R</khao-timeline-item>
            <khao-timeline-item>S</khao-timeline-item>
            <khao-timeline-item>T</khao-timeline-item>
            <khao-timeline-item>U</khao-timeline-item>
            <khao-timeline-item>V</khao-timeline-item>
            <khao-timeline-item>W</khao-timeline-item>
            <khao-timeline-item>X</khao-timeline-item>
            <khao-timeline-item>Y</khao-timeline-item>
            <khao-timeline-item>Z</khao-timeline-item>
          <khao-timeline>
      `;
  },
};

export const WordsExample: Story = {
  args: {
    size: "large",
  },

  render: (size: string) => {
    return `
          <khao-timeline size="${size}">
            <khao-timeline-item>Bücher</khao-timeline-item>
            <khao-timeline-item>Blogs</khao-timeline-item>
            <khao-timeline-item>Websites</khao-timeline-item>
            <khao-timeline-item>Videos</khao-timeline-item>
            <khao-timeline-item>Facebookgruppen</khao-timeline-item>
          <khao-timeline>
      `;
  },
};

export const WordsExample2: Story = {
  args: {
    size: "large",
  },

  render: (size: string) => {
    return `
          <khao-timeline size="${size}">
            <khao-timeline-item active="true">Suche</khao-timeline-item>
            <khao-timeline-item>Alle Stichworte</khao-timeline-item>
            <khao-timeline-item>Landesküchen</khao-timeline-item>
            <khao-timeline-item>Rezepte A-Z</khao-timeline-item>
            <khao-timeline-item>Alle Inhalte</khao-timeline-item>
            <khao-timeline-item>Karten</khao-timeline-item>
            <khao-timeline-item>Neuester Beitrag</khao-timeline-item>
            <khao-timeline-item>Zufall</khao-timeline-item>
          <khao-timeline>
      `;
  },
};

export const AhaanExample: Story = {
  args: {
    size: "large",
  },

  render: (size: string) => {
    return `
          <khao-timeline size="${size}">
            <khao-timeline-item>A</khao-timeline-item>
            <khao-timeline-item>B</khao-timeline-item>
            <khao-timeline-item>C</khao-timeline-item>
            <khao-timeline-item>D</khao-timeline-item>
            <khao-timeline-item>G</khao-timeline-item>
            <khao-timeline-item>H</khao-timeline-item>
            <khao-timeline-item>K</khao-timeline-item>
            <khao-timeline-item>L</khao-timeline-item>
            <khao-timeline-item>M</khao-timeline-item>
            <khao-timeline-item>N</khao-timeline-item>
            <khao-timeline-item>P</khao-timeline-item>
            <khao-timeline-item>S</khao-timeline-item>
            <khao-timeline-item>T</khao-timeline-item>
            <khao-timeline-item>Y</khao-timeline-item>
          <khao-timeline>
      `;
  },
};
