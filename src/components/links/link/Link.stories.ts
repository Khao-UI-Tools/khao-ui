import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Link from "./Link.svelte";
import { iconNames } from "../../../icons/IconName";

const meta = {
  title: "Links/Link",
  component: "khao-link",
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: iconNames,
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "A humble link",
    href: "/",
  },
};

export const ExternalLink: Story = {
  args: {
    label: "External link",
    href: "/",
    iconName: "external-link",
  },
};

export const AffiliateLink: Story = {
  args: {
    label: "Affiliate Link",
    href: "/",
    iconName: "cart",
  },
};

export const SpeakerLink: Story = {
  args: {
    label: "Clickthai Link",
    href: "/",
    iconName: "speaker",
  },
};

export const LinksInsideText: Story = {
  render: () =>
    `<p style="line-height: 1.5rem;">Lorem ipsum dolor sit amet, consectetuer <khao-link label="test" iconName="speaker"></khao-link> adipiscing elit. Aenean commodo (<khao-link label="test" iconName="external-link"></khao-link>) eu, pretium quis.Stet clita <khao-link label="test" iconName="cart"></khao-link> kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>`,
};
