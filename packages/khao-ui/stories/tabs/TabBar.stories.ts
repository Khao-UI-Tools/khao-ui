import type { Meta, StoryObj } from "@storybook/web-components-vite";
import TabBar from "../../src/components/tabs/tabBar/TabBar.svelte";

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
        size: "small",
      },
      {
        label: "2",
        key: "2",
        href: "/",
        size: "small",
      },
      {
        label: "3",
        key: "3",
        href: "/",
        size: "small",
      },
      {
        label: "4",
        key: "4",
        href: "/",
        size: "small",
      },
      {
        label: "5",
        key: "5",
        href: "/",
        size: "small",
      },
      {
        label: "6",
        key: "6",
        href: "/",
        size: "small",
      },
      {
        label: "7",
        key: "7",
        href: "/",
        size: "small",
      },
      {
        label: "8",
        key: "8",
        href: "/",
        size: "small",
      },
      {
        label: "9",
        key: "9",
        href: "/",
        size: "small",
      },
      {
        label: "10",
        key: "10",
        href: "/",
        size: "small",
      },
      {
        label: "11",
        key: "11",
        href: "/",
        size: "small",
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
        size: "small",
      },
      {
        label: "B",
        key: "b",
        href: "/",
        size: "small",
      },
      {
        label: "C",
        key: "c",
        href: "/",
        size: "small",
      },
      {
        label: "D",
        key: "d",
        href: "/",
        size: "small",
      },
      {
        label: "E",
        key: "e",
        href: "/",
        size: "small",
      },
      {
        label: "F",
        key: "f",
        href: "/",
        size: "small",
      },
      {
        label: "G",
        key: "g",
        href: "/",
        size: "small",
      },
      {
        label: "H",
        key: "h",
        href: "/",
        size: "small",
      },
      {
        label: "I",
        key: "i",
        href: "/",
        size: "small",
      },
      {
        label: "J",
        key: "j",
        href: "/",
        size: "small",
      },
      {
        label: "K",
        key: "k",
        href: "/",
        size: "small",
      },
      {
        label: "L",
        key: "l",
        href: "/",
        size: "small",
      },
      {
        label: "M",
        key: "m",
        href: "/",
        size: "small",
      },
      {
        label: "N",
        key: "n",
        href: "/",
        size: "small",
      },
      {
        label: "O",
        key: "o",
        href: "/",
        size: "small",
      },
      {
        label: "P",
        key: "p",
        href: "/",
        size: "small",
      },
      {
        label: "Q",
        key: "q",
        href: "/",
        size: "small",
      },
      {
        label: "R",
        key: "r",
        href: "/",
        size: "small",
      },
      {
        label: "S",
        key: "s",
        href: "/",
        size: "small",
      },
      {
        label: "T",
        key: "t",
        href: "/",
        size: "small",
      },
      {
        label: "U",
        key: "u",
        href: "/",
        size: "small",
      },
      {
        label: "V",
        key: "v",
        href: "/",
        size: "small",
      },
      {
        label: "W",
        key: "w",
        href: "/",
        size: "small",
      },
      {
        label: "X",
        key: "x",
        href: "/",
        size: "small",
      },
      {
        label: "Y",
        key: "y",
        href: "/",
        size: "small",
      },
      {
        label: "Z",
        key: "z",
        href: "/",
        size: "small",
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
        size: "small",
      },
      {
        label: "B",
        key: "b",
        href: "/",
        size: "small",
      },
      {
        label: "C",
        key: "c",
        href: "/",
        size: "small",
      },
      {
        label: "D",
        key: "d",
        href: "/",
        size: "small",
      },
      {
        label: "G",
        key: "g",
        href: "/",
        size: "small",
      },
      {
        label: "H",
        key: "h",
        href: "/",
        size: "small",
      },
      {
        label: "K",
        key: "k",
        href: "/",
        size: "small",
      },
      {
        label: "L",
        key: "l",
        href: "/",
        size: "small",
      },
      {
        label: "M",
        key: "m",
        href: "/",
        size: "small",
      },
      {
        label: "N",
        key: "n",
        href: "/",
        size: "small",
      },
      {
        label: "P",
        key: "p",
        href: "/",
        size: "small",
      },
      {
        label: "S",
        key: "s",
        href: "/",
        size: "small",
      },
      {
        label: "T",
        key: "t",
        href: "/",
        size: "small",
      },
      {
        label: "Y",
        key: "y",
        href: "/",
        size: "small",
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
    scrollShadow: true,
    tabs: [
      {
        label: "Bücher",
        key: "buecher",
        href: "/",
        size: "large",
      },
      {
        label: "Blogs",
        key: "blogs",
        href: "/",
        size: "large",
      },
      {
        label: "Websites",
        key: "websites",
        href: "/",
        size: "large",
      },
      {
        label: "Videos",
        key: "videos",
        href: "/",
        size: "large",
      },
      {
        label: "Gruppen",
        key: "gruppen",
        href: "/",
        size: "large",
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
    scrollShadow: true,
    tabs: [
      {
        label: "Suche",
        key: "suche",
        href: "/",
        size: "large",
      },
      {
        label: "Stichwörter",
        key: "tags",
        href: "/",
        size: "large",
      },
      {
        label: "Länder",
        key: "landeskuechen",
        href: "/",
        size: "large",
      },
      {
        label: "Karten",
        key: "karten",
        href: "/",
        size: "large",
      },
      {
        label: "Aktuell",
        key: "neu",
        href: "/",
        size: "large",
      },
      {
        label: "Zufall",
        key: "zufall",
        href: "/",
        size: "large",
      },
    ],
  },
  render: renderTabBar,
};
