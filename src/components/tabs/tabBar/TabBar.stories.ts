import type { Meta, StoryObj } from "@storybook/web-components-vite";
import TabBar from "./TabBar.svelte";

const meta = {
  title: "Tabs/TabBar",
  component: "khao-tab-bar",
  tags: ["autodocs"],
  argTypes: {
    tabs: {
      control: "text",
      type: "string",
    },
    activeTabKey: {
      control: "text",
      type: "string",
    },
    maxWidth: {
      control: "text",
      type: "string",
    },
    centered: {
      control: "boolean",
      type: "Boolean",
    },
    scrollShadow: {
      control: "boolean",
      type: "Boolean",
    },
  },
} satisfies Meta<TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  tabs: { key: string; label: string }[];
  activeTabKey: string;
  maxWidth: string;
  centered: boolean;
  scrollShadow: boolean;
}

const renderTabBar = (props: renderProps) => {
  const tabBar = `
      <khao-tab-bar 
          activeTabKey="${props.activeTabKey}" 
          maxWidth="${props.maxWidth}" 
          centered=${props.centered}
          scrollShadow=${props.scrollShadow} 
          tabs='${JSON.stringify(props.tabs)}'
      >
      </khao-tab-bar>`;
  return tabBar;
};

export const Default: Story = {
  args: {
    activeTabKey: "3",
    maxWidth: "600px",
    centered: true,
    scrollShadow: true,
    tabs: [
      {
        label: "1",
        key: "1",
        href: "/",
      },
      {
        label: "2",
        key: "2",
        href: "/",
      },
      {
        label: "3",
        key: "3",
        href: "/",
      },
      {
        label: "4",
        key: "4",
        href: "/",
      },
      {
        label: "5",
        key: "5",
        href: "/",
      },
      {
        label: "6",
        key: "6",
        href: "/",
      },
      {
        label: "7",
        key: "7",
        href: "/",
      },
      {
        label: "8",
        key: "8",
        href: "/",
      },
      {
        label: "9",
        key: "9",
        href: "/",
      },
      {
        label: "10",
        key: "10",
        href: "/",
      },
      {
        label: "11",
        key: "11",
        href: "/",
      },
    ],
  },
  render: renderTabBar,
};

export const AlphabetExample: Story = {
  args: {
    activeTabKey: "x",
    maxWidth: "600px",
    centered: true,
    scrollShadow: true,
    tabs: [
      {
        label: "A",
        key: "a",
        href: "/",
        size: "flex",
      },
      {
        label: "B",
        key: "b",
        href: "/",
        size: "flex",
      },
      {
        label: "C",
        key: "c",
        href: "/",
        size: "flex",
      },
      {
        label: "D",
        key: "d",
        href: "/",
        size: "flex",
      },
      {
        label: "E",
        key: "e",
        href: "/",
        size: "flex",
      },
      {
        label: "F",
        key: "f",
        href: "/",
        size: "flex",
      },
      {
        label: "G",
        key: "g",
        href: "/",
        size: "flex",
      },
      {
        label: "H",
        key: "h",
        href: "/",
        size: "flex",
      },
      {
        label: "I",
        key: "i",
        href: "/",
        size: "flex",
      },
      {
        label: "J",
        key: "j",
        href: "/",
        size: "flex",
      },
      {
        label: "K",
        key: "k",
        href: "/",
        size: "flex",
      },
      {
        label: "L",
        key: "l",
        href: "/",
        size: "flex",
      },
      {
        label: "M",
        key: "m",
        href: "/",
        size: "flex",
      },
      {
        label: "N",
        key: "n",
        href: "/",
        size: "flex",
      },
      {
        label: "O",
        key: "o",
        href: "/",
        size: "flex",
      },
      {
        label: "P",
        key: "p",
        href: "/",
        size: "flex",
      },
      {
        label: "Q",
        key: "q",
        href: "/",
        size: "flex",
      },
      {
        label: "R",
        key: "r",
        href: "/",
        size: "flex",
      },
      {
        label: "S",
        key: "s",
        href: "/",
        size: "flex",
      },
      {
        label: "T",
        key: "t",
        href: "/",
        size: "flex",
      },
      {
        label: "U",
        key: "u",
        href: "/",
        size: "flex",
      },
      {
        label: "V",
        key: "v",
        href: "/",
        size: "flex",
      },
      {
        label: "W",
        key: "w",
        href: "/",
        size: "flex",
      },
      {
        label: "X",
        key: "x",
        href: "/",
        size: "flex",
      },
      {
        label: "Y",
        key: "y",
        href: "/",
        size: "flex",
      },
      {
        label: "Z",
        key: "z",
        href: "/",
        size: "flex",
      },
    ],
  },
  render: renderTabBar,
};

export const AhaanIndexExample: Story = {
  args: {
    activeTabKey: "s",
    maxWidth: "600px",
    centered: true,
    tabs: [
      {
        label: "A",
        key: "a",
        href: "/",
        size: "flex",
      },
      {
        label: "B",
        key: "b",
        href: "/",
        size: "flex",
      },
      {
        label: "C",
        key: "c",
        href: "/",
        size: "flex",
      },
      {
        label: "D",
        key: "d",
        href: "/",
        size: "flex",
      },
      {
        label: "G",
        key: "g",
        href: "/",
        size: "flex",
      },
      {
        label: "H",
        key: "h",
        href: "/",
        size: "flex",
      },
      {
        label: "K",
        key: "k",
        href: "/",
        size: "flex",
      },
      {
        label: "L",
        key: "l",
        href: "/",
        size: "flex",
      },
      {
        label: "M",
        key: "m",
        href: "/",
        size: "flex",
      },
      {
        label: "N",
        key: "n",
        href: "/",
        size: "flex",
      },
      {
        label: "P",
        key: "p",
        href: "/",
        size: "flex",
      },
      {
        label: "S",
        key: "s",
        href: "/",
        size: "flex",
      },
      {
        label: "T",
        key: "t",
        href: "/",
        size: "flex",
      },
      {
        label: "Y",
        key: "y",
        href: "/",
        size: "flex",
      },
    ],
  },
  render: renderTabBar,
};

export const WordsExample: Story = {
  args: {
    activeTabKey: "videos",
    maxWidth: "600px",
    centered: true,
    tabs: [
      {
        label: "Bücher",
        key: "buecher",
        href: "/",
      },
      {
        label: "Blogs",
        key: "blogs",
        href: "/",
      },
      {
        label: "Websites",
        key: "websites",
        href: "/",
      },
      {
        label: "Videos",
        key: "videos",
        href: "/",
      },
      {
        label: "Gruppen",
        key: "gruppen",
        href: "/",
      },
    ],
  },
  render: renderTabBar,
};

export const WordsExample2: Story = {
  args: {
    activeTabKey: "landeskuechen",
    maxWidth: "600px",
    centered: true,
    tabs: [
      {
        label: "Suche",
        key: "suche",
        href: "/",
      },
      {
        label: "Stichwörter",
        key: "tags",
        href: "/",
      },
      {
        label: "Länder",
        key: "landeskuechen",
        href: "/",
      },
      {
        label: "Karten",
        key: "karten",
        href: "/",
      },
      {
        label: "Aktuell",
        key: "neu",
        href: "/",
      },
      {
        label: "Zufall",
        key: "zufall",
        href: "/",
      },
    ],
  },
  render: renderTabBar,
};
