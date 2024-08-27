import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Link from "./Link.svelte";
import { iconNames } from "../../../icons/types/IconName";
import { iconLocations, iconLocationDefault } from "./LinkIconLocation";
import { linkPriorities, linkPriorityDefault } from "./types/LinkPriority";
import {
  iconOpacities,
  iconOpacityDefault,
} from "../../../icons/types/IconOpacity";

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
    iconOpacity: {
      control: { type: "select" },
      options: iconOpacities,
      default: iconOpacityDefault,
    },
    priority: {
      control: { type: "select" },
      options: linkPriorities,
      default: linkPriorityDefault,
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
    opensNewWindow: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<Link>;

interface renderProps {
  href: String;
  iconName: string;
  iconLocation: string;
  iconOpacity: string;
  label: String;
  opensNewWindow: string;
  priority: string;
}

const render = (props: renderProps): string => {
  return `<khao-link href="${props.href}" opensNewWindow=${props.opensNewWindow} iconName="${props.iconName || ""}" iconLocation="${props.iconLocation || iconLocationDefault}"  iconOpacity="${props.iconOpacity || iconOpacityDefault}" priority="${props.priority}">${props.label}</khao-link>`;
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "Primary Link",
    href: "/",
    priority: "primary",
  },
  render: render,
};

export const SecondaryLink: Story = {
  args: {
    label: "Secondary Link",
    href: "/",
    priority: "secondary",
  },
  render: render,
};

export const ExternalLink: Story = {
  args: {
    label: "External link",
    href: "/",
    iconName: "external-link",
    priority: "primary",
  },
  render: render,
};

export const AffiliateLink: Story = {
  args: {
    label: "Affiliate Link",
    href: "/",
    iconName: "cart",
    priority: "primary",
  },
  render: render,
};

export const SpeakerLink: Story = {
  args: {
    label: "Clickthai Link",
    href: "/",
    iconName: "speaker",
    priority: "primary",
    opensNewWindow: "true",
  },
  render: render,
};

export const HelpLink: Story = {
  args: {
    label: "Help Link",
    href: "/",
    iconName: "help",
    iconOpacity: "70%",
    priority: "primary",
    opensNewWindow: "true",
  },
  render: render,
};

export const ReiskochLink: Story = {
  args: {
    label: "Reiskoch Link",
    href: "/",
    iconName: "reiskoch-logo",
    priority: "primary",
  },
  render: render,
};

export const TranslationLink: Story = {
  args: {
    label: "Translation Link",
    href: "/",
    iconName: "translation",
    priority: "primary",
  },
  render: render,
};

export const BackLink: Story = {
  args: {
    label: "Back",
    href: "/",
    iconName: "navigate-back",
    iconLocation: "before",
    opensNewWindow: "true",
  },
  render: render,
};

export const ForwardLink: Story = {
  args: {
    label: "Forward",
    href: "/",
    iconName: "navigate-forward",
    opensNewWindow: "true",
  },
  render: render,
};

export const LinksInsideText: Story = {
  render: () =>
    `<p style="line-height: 1.6rem; width: 400px">Lorem <khao-link>ipsum</khao-link> dolor sit amet, consectetuer <khao-link iconName="help">textus longus extremus</khao-link> adipiscing elit. Aenean commodo (<khao-link iconName="speaker">Speakus Linkus</khao-link>) eu, pretium quis.Stet clita <khao-link iconName="cart">Merch Gigantus</khao-link> kasd gubergren, no sea takimata melaton <khao-link>ipsum langos textus in linkus breakus nextus linos</khao-link> sanctus est Lorem <khao-link iconName="reiskoch-logo">ipsum fragus dummus questus</khao-link> dolor sit amet.</p>`,
};
