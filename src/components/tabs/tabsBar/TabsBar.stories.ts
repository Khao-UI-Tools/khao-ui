import type { Meta, StoryObj } from "@storybook/web-components-vite";
import TabsBar from "./TabsBar.svelte";

const meta = {
  title: "Tabs/TabsBar",
  component: "khao-tabs-bar",
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<TabsBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationExample: Story = {
  render: () => {
    return `
          <khao-tabs-bar>
            <khao-tab>1</khao-tab>
            <khao-tab>2</khao-tab>
            <khao-tab>3</khao-tab>
            <khao-tab>4</khao-tab>
            <khao-tab>5</khao-tab>
            <khao-tab>6</khao-tab>
            <khao-tab active="true">7</khao-tab>
            <khao-tab>8</khao-tab>
            <khao-tab>9</khao-tab>
            <khao-tab>10</khao-tab>
            <khao-tab>11</khao-tab>
            <khao-tab>12</khao-tab>
            <khao-tab>13</khao-tab>
          </khao-tabs-bar>
      `;
  },
};

export const AlphabetExample: Story = {
  args: {},
  render: () => {
    return `
          <div style="width: 600px;">
            <khao-tabs-bar>
              <khao-tab>A</khao-tab>
              <khao-tab>B</khao-tab>
              <khao-tab>C</khao-tab>
              <khao-tab>D</khao-tab>
              <khao-tab>E</khao-tab>
              <khao-tab>F</khao-tab>
              <khao-tab>G</khao-tab>
              <khao-tab>H</khao-tab>
              <khao-tab>I</khao-tab>
              <khao-tab>J</khao-tab>
              <khao-tab>K</khao-tab>
              <khao-tab>L</khao-tab>
              <khao-tab>M</khao-tab>
              <khao-tab>N</khao-tab>
              <khao-tab>O</khao-tab>
              <khao-tab>P</khao-tab>
              <khao-tab active="true" title="Q">Q</khao-tab>
              <khao-tab>R</khao-tab>
              <khao-tab>S</khao-tab>
              <khao-tab>T</khao-tab>
              <khao-tab>U</khao-tab>
              <khao-tab>V</khao-tab>
              <khao-tab>W</khao-tab>
              <khao-tab>X</khao-tab>
              <khao-tab>Y</khao-tab>
              <khao-tab>Z</khao-tab>
            </khao-tabs-bar>
        </div>
      `;
  },
};

export const WordsExample: Story = {
  args: {},
  render: () => {
    return `
          <khao-tabs-bar>
            <khao-tab>Bücher</khao-tab>
            <khao-tab>Blogs</khao-tab>
            <khao-tab active="true">Websites</khao-tab>
            <khao-tab>Videos</khao-tab>
            <khao-tab>Facebookgruppen</khao-tab>
          </khao-tabs-bar>
      `;
  },
};

export const WordsExample2: Story = {
  args: {},
  render: () => {
    return `
          <khao-tabs-bar>
            <khao-tab>Suche</khao-tab>
            <khao-tab>Alle Stichworte</khao-tab>
            <khao-tab>Landesküchen</khao-tab>
            <khao-tab active="true">Rezepte A-Z</khao-tab>
            <khao-tab>Alle Inhalte</khao-tab>
            <khao-tab>Karten</khao-tab>
            <khao-tab>Neuester Beitrag</khao-tab>
            <khao-tab>Zufall</khao-tab>
          </khao-tabs-bar>
      `;
  },
};

export const AhaanExample: Story = {
  args: {},
  render: () => {
    return `
          <khao-tabs-bar>
            <khao-tab>A</khao-tab>
            <khao-tab>B</khao-tab>
            <khao-tab>C</khao-tab>
            <khao-tab>D</khao-tab>
            <khao-tab>G</khao-tab>
            <khao-tab>H</khao-tab>
            <khao-tab>K</khao-tab>
            <khao-tab>L</khao-tab>
            <khao-tab>M</khao-tab>
            <khao-tab>N</khao-tab>
            <khao-tab>P</khao-tab>
            <khao-tab active="true">S</khao-tab>
            <khao-tab>T</khao-tab>
            <khao-tab>Y</khao-tab>
          </khao-tabs-bar>
      `;
  },
};
