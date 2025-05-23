import type { Meta, StoryObj } from "@storybook/web-components-vite";
import Link from "../../src/components/links/link/Link.svelte";
import { iconNames } from "../../src/icons/types/IconName";
import { iconLocations } from "../../src/components/links/link/types/LinkIconLocation";
import {
  linkPriorities,
  linkPriorityDefault,
} from "../../src/components/links/link/types/LinkPriority";
import {
  iconSizeFactors,
  iconSizeFactorDefault,
} from "../../src/icons/types/IconSizeFactor";

import {
  iconOpacities,
  iconOpacityDefault,
} from "../../src/icons/types/IconOpacity";

const meta = {
  title: "links/Link",
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
    iconEnlarged: {
      control: { type: "select" },
      options: ["true", "false"],
      type: "string",
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Primary Link",
    href: "/",
    priority: "primary",
    iconEnlarged: "false",
  },
};

export const SecondaryLink: Story = {
  args: {
    label: "Secondary Link",
    href: "/",
    priority: "secondary",
  },
};

export const SecondaryEmphasizedLink: Story = {
  args: {
    label: "Emphasized Secondary Link",
    href: "/",
    priority: "secondary-emphasized",
  },
};

export const ExternalLink: Story = {
  args: {
    label: "External link",
    href: "/",
    iconName: "external-link",
    priority: "primary",
  },
};

export const AffiliateLink: Story = {
  args: {
    label: "Affiliate Link",
    href: "/",
    iconName: "cart",
    iconEnlarged: "true",
    priority: "primary",
  },
};

export const SpeakerLink: Story = {
  args: {
    label: "Clickthai Link",
    href: "/",
    iconName: "speaker",
    priority: "primary",
    opensNewWindow: "true",
  },
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
};

export const ReiskochLink: Story = {
  args: {
    label: "Reiskoch Link",
    href: "/",
    iconName: "reiskoch-logo",
    priority: "primary",
  },
};

export const TranslationLink: Story = {
  args: {
    label: "Translation Link",
    href: "/",
    iconName: "translation",
    priority: "primary",
  },
};

export const BookLink: Story = {
  args: {
    label: "Book Link",
    href: "/",
    iconName: "book",
    iconEnlarged: "true",
    priority: "primary",
  },
};

export const PhoneLink: Story = {
  args: {
    label: "+49 123 456789",
    href: "tel:+49 123 456789",
    iconName: "phone",
    iconEnlarged: "true",
    iconLocation: "before",
    priority: "secondary-emphasized",
  },
};

export const WebsiteLink: Story = {
  args: {
    label: "www.der-reiskoch.de",
    href: "/",
    iconName: "globe",
    iconEnlarged: "true",
    iconLocation: "before",
    priority: "secondary-emphasized",
  },
};

export const BackLink: Story = {
  args: {
    label: "Back",
    href: "/",
    iconName: "navigate-back",
    iconLocation: "before",
    opensNewWindow: "true",
  },
};

export const ForwardLink: Story = {
  args: {
    label: "Forward",
    href: "/",
    iconName: "navigate-forward",
    opensNewWindow: "true",
  },
};

export const LinksInsideText: Story = {
  render: () =>
    `<p style="line-height: 1.6rem; width: 400px">
        Lorem <khao-link label="ipsum"></khao-link> dolor sit amet, consectetuer <khao-link iconName="help" label="textus helpus longus extremus"></khao-link> adipiscing elit. 
        Aenean commodo (<khao-link iconName="speaker" label="Speakus Linkus"></khao-link>) eu bla elissum <khao-link label="Linkus befori kommatum"></khao-link>, pretium quis.
        Stet clita <khao-link iconName="cart" label="Merch Gigantus"></khao-link> kasd gubergren, no sea takimata melaton 
        <khao-link>ipsum langos textus in linkus breakus nextus linos</khao-link> sanctus est Lorem <khao-link iconName="reiskoch-logo" label="ipsum fragus dummus questus"></khao-link> 
        dolor sit amet <khao-link label="linkus avantus dotus"></khao-link>.
      </p>`,
};

export const LinksInsideCard: Story = {
  render: () =>
    `<khao-card filling="primary">
        Lorem <khao-link label="ipsum"></khao-link> dolor sit amet, consectetuer <khao-link iconName="help" label="textus helpus longus extremus"></khao-link> adipiscing elit. 
        Aenean commodo (<khao-link iconName="speaker" label="Speakus Linkus"></khao-link>) eu bla elissum <khao-link label="Linkus befori kommatum"></khao-link>, pretium quis.
        Stet clita <khao-link iconName="cart" label="Merch Gigantus"></khao-link> kasd gubergren, no sea takimata melaton 
        <khao-link>ipsum langos textus in linkus breakus nextus linos</khao-link> sanctus est Lorem <khao-link iconName="reiskoch-logo" label="ipsum fragus dummus questus"></khao-link> 
        dolor sit amet <khao-link label="linkus avantus dotus"></khao-link>.
      </<khao-card>`,
};

export const HeadlineLinks: Story = {
  render: () =>
    `<p style="line-height: 1.6rem; width: 400px">
        <h2><khao-link label="h2 link"></khao-link></h2>
      </p>`,
};
