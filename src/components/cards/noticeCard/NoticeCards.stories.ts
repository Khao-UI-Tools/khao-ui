import type { Meta, StoryObj } from "@storybook/web-components-vite";
import NoticeCard from "./NoticeCard.svelte";
import { noticeTypes, noticeTypeDefault } from "./NoticeTypes";

import Link from "../../links/link/Link.svelte";

const meta = {
  title: "Cards/NoticeCard",
  component: "khao-card-notice",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: noticeTypes,
      type: "string",
      default: noticeTypeDefault,
    },
    title: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<NoticeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: noticeTypeDefault,
    title: "An info notice card",
  },
};

export const Neutral: Story = {
  args: {
    type: "neutral",
    title: "A neutral notice card",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "A warning notice card",
  },
};

export const infoExample: Story = {
  render: () => `<khao-card-notice type="info" title="A primary notice card">
    Lorem ipsum dolor sit amet, consectetuer <khao-link label="test" iconName="speaker"></khao-link> adipiscing elit. Aenean commodo (<khao-link label="test" iconName="external-link"></khao-link>) eu, pretium quis.Stet clita <khao-link label="test" iconName="cart"></khao-link> kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</khao-card-notice>`,
};

export const neutralExample: Story = {
  render: () => `<khao-card-notice type="neutral" title="A primary notice card">
    Lorem ipsum dolor sit amet, consectetuer <khao-link label="test" iconName="speaker"></khao-link> adipiscing elit. Aenean commodo (<khao-link label="test" iconName="external-link"></khao-link>) eu, pretium quis.Stet clita <khao-link label="test" iconName="cart"></khao-link> kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</khao-card-notice>`,
};


export const warningExample: Story = {
  render: () => `<khao-card-notice type="warning" title="A warning notice card">
    Lorem ipsum dolor sit amet, consectetuer <khao-link label="test" iconName="speaker"></khao-link> adipiscing elit. Aenean commodo (<khao-link label="test" iconName="external-link"></khao-link>) eu, pretium quis.Stet clita <khao-link label="test" iconName="cart"></khao-link> kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</khao-card-notice>`,
};
