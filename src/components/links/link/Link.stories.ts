import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Link from "./Link.svelte";
import { iconNames } from "../../../icons/types/IconName";
import { iconLocations, iconLocationDefault } from "./LinkIconLocation";

const meta = {
  title: "Links/Link",
  component: "khao-link",
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: iconNames,
      default: "",
    },
    iconLocation: {
      control: { type: "select" },
      options: iconLocations,
    },
    label: {
      control: "text",
      type: "string",
    },
    title: {
      control: "text",
      type: "string",
    },
    href: {
      control: "text",
      type: "string",
    },
    rel: {
      control: "text",
      type: "string",
    },
    target: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<Link>;

interface renderProps {
  label: String;
  href: String;
  iconName: string;
  iconLocation: string;
}

const render = (props: renderProps): string => {
  return `<khao-link href="${props.href}" iconName="${props.iconName || ""}" iconLocation="${props.iconLocation || iconLocationDefault}">${props.label}</khao-link>`;
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "A humble link",
    href: "/",
  },
  render: render,
};

export const ExternalLink: Story = {
  args: {
    label: "External link",
    href: "/",
    iconName: "external-link",
  },
  render: render,
};

export const AffiliateLink: Story = {
  args: {
    label: "Affiliate Link",
    href: "/",
    iconName: "cart",
  },
  render: render,
};

export const SpeakerLink: Story = {
  args: {
    label: "Clickthai Link",
    href: "/",
    iconName: "speaker",
  },
  render: render,
};

export const HelpLink: Story = {
  args: {
    label: "Help Link",
    href: "/",
    iconName: "help",
    iconLocation: "before",
  },
  render: render,
};

export const ReiskochLink: Story = {
  args: {
    label: "Reiskoch Link",
    href: "/",
    iconName: "reiskoch-logo",
  },
  render: render,
};

export const TranslationLink: Story = {
  args: {
    label: "Translation Link",
    href: "/",
    iconName: "translation",
  },
  render: render,
};

export const LinksInsideText: Story = {
  render: () =>
    `<p style="line-height: 1.6rem; width: 400px">Lorem <khao-link>ipsum</khao-link> dolor sit amet, consectetuer <khao-link iconName="help">textus longus extremus</khao-link> adipiscing elit. Aenean commodo (<khao-link iconName="speaker">Speakus Linkus</khao-link>) eu, pretium quis.Stet clita <khao-link iconName="cart">Merch Gigantus</khao-link> kasd gubergren, no sea takimata melaton <khao-link>ipsum langos textus in linkus breakus nextus linos</khao-link> sanctus est Lorem <khao-link iconName="reiskoch-logo">ipsum fragus dummus questus</khao-link> dolor sit amet.</p>`,
};
