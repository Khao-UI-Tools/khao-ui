import type { Meta, StoryObj } from "@storybook/web-components-vite";
import TabBar from "./TabBar.svelte";

const meta = {
  title: "Tabs/TabBar",
  component: "khao-tab-bar",
  tags: ["autodocs"],
  argTypes: {
    tabs: {
      control: "object",
      type: "string",
    },
    activeTabKey: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  tabs: { key: string; label: string }[];
  activeTabKey: string;
}

const renderTabBar = (props: renderProps) => {
  const tabBar = `<khao-tab-bar activeTabKey="${props.activeTabKey}" tabs='${JSON.stringify(props.tabs)}'></khao-tab-bar>`;
  return tabBar;
};

export const Default: Story = {
  args: {
    activeTabKey: "3",
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
    tabs: [
      {
        label: "A",
        key: "a",
        href: "/",
      },
      {
        label: "B",
        key: "b",
        href: "/",
      },
      {
        label: "C",
        key: "c",
        href: "/",
      },
      {
        label: "D",
        key: "d",
        href: "/",
      },
      {
        label: "E",
        key: "e",
        href: "/",
      },
      {
        label: "F",
        key: "f",
        href: "/",
      },
      {
        label: "G",
        key: "g",
        href: "/",
      },
      {
        label: "H",
        key: "h",
        href: "/",
      },
      {
        label: "I",
        key: "i",
        href: "/",
      },
      {
        label: "J",
        key: "j",
        href: "/",
      },
      {
        label: "K",
        key: "k",
        href: "/",
      },
      {
        label: "L",
        key: "l",
        href: "/",
      },
      {
        label: "M",
        key: "m",
        href: "/",
      },
      {
        label: "N",
        key: "n",
        href: "/",
      },
      {
        label: "O",
        key: "o",
        href: "/",
      },
      {
        label: "P",
        key: "p",
        href: "/",
      },
      {
        label: "Q",
        key: "q",
        href: "/",
      },
      {
        label: "R",
        key: "r",
        href: "/",
      },
      {
        label: "S",
        key: "s",
        href: "/",
      },
      {
        label: "T",
        key: "t",
        href: "/",
      },
      {
        label: "U",
        key: "u",
        href: "/",
      },
      {
        label: "V",
        key: "v",
        href: "/",
      },
      {
        label: "W",
        key: "w",
        href: "/",
      },
      {
        label: "X",
        key: "x",
        href: "/",
      },
      {
        label: "Y",
        key: "y",
        href: "/",
      },
      {
        label: "Z",
        key: "z",
        href: "/",
      },
    ],
  },
  render: renderTabBar,
};

export const AhaanIndexExample: Story = {
  args: {
    activeTabKey: "s",
    tabs: [
      {
        label: "A",
        key: "a",
        href: "/",
      },
      {
        label: "B",
        key: "b",
        href: "/",
      },
      {
        label: "C",
        key: "c",
        href: "/",
      },
      {
        label: "D",
        key: "d",
        href: "/",
      },
      {
        label: "G",
        key: "g",
        href: "/",
      },
      {
        label: "H",
        key: "h",
        href: "/",
      },
      {
        label: "K",
        key: "k",
        href: "/",
      },
      {
        label: "L",
        key: "l",
        href: "/",
      },
      {
        label: "M",
        key: "m",
        href: "/",
      },
      {
        label: "N",
        key: "n",
        href: "/",
      },
      {
        label: "P",
        key: "p",
        href: "/",
      },
      {
        label: "S",
        key: "s",
        href: "/",
      },
      {
        label: "T",
        key: "t",
        href: "/",
      },
      {
        label: "Y",
        key: "y",
        href: "/",
      },
    ],
  },
  render: renderTabBar,
};

export const WordsExample: Story = {
  args: {
    activeTabKey: "videos",
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
        label: "Facebookgruppen",
        key: "gruppen",
        href: "/",
      },
    ],
  },
  render: renderTabBar,
};

export const WordsExample2: Story = {
  args: {
    activeTabKey: "rezepte-a-z",
    tabs: [
      {
        label: "Suche",
        key: "suche",
        href: "/",
        size: "compact",
      },
      {
        label: "Alle Stichworte",
        key: "tags",
        href: "/",
        size: "compact",
      },
      {
        label: "Landesküchen",
        key: "landeskuechen",
        href: "/",
        size: "compact",
      },
      {
        label: "Rezepte A-Z",
        key: "rezepte-a-z",
        href: "/",
        size: "compact",
      },
      {
        label: "Alle Inhalte",
        key: "all",
        href: "/",
        size: "compact",
      },
      {
        label: "Karten",
        key: "karten",
        href: "/",
        size: "compact",
      },
      {
        label: "Neuester Beitrag",
        key: "neu",
        href: "/",
        size: "compact",
      },
      {
        label: "Zufall",
        key: "zufall",
        href: "/",
        size: "compact",
      },
    ],
  },
  render: renderTabBar,
};
