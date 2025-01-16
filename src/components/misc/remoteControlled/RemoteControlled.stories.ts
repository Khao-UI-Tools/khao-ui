import type { Meta, StoryObj } from "@storybook/web-components-vite";
import remoteControlled from "./RemoteControlled.svelte";
import remoteControl from "./RemoteControl.svelte";
import { visibilityOptions } from "./types/Visibility";

const meta = {
  title: "Misc/RemoteControlled",
  component: "khao-remote-controlled",
  tags: ["autodocs"],
  argTypes: {
    visibility: {
      control: { type: "select" },
      options: visibilityOptions,
      default: "hidden",
    },
    channelId: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<remoteControlled>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  visibility: string;
  channelId?: string;
  slot: string;
  remoteControl: string;
}

const render = (props: renderProps): string => {
  return `<khao-remote-controlled visibility="${props.visibility}" channelId=${
    props.channelId
  }>${props.slot}</khao-remote-controlled>${props.remoteControl || ""}`;
};

export const Hidden: Story = {
  args: {
    visibility: "hidden",
    channelId: "5",
    slot: `<span>I am hidden and i listen to channel Id 5<span>`,
  },
  render: render,
};

export const Visible: Story = {
  args: {
    visibility: "visible",
    channelId: "8",
    slot: `<span>I am visible and i listen to channel Id 8<span>`,
  },
  render: render,
};

export const HiddenBecomesVisible: Story = {
  args: {
    visibility: "hidden",
    channelId: "19",
    slot: `<span>I am hidden but will become visible and i listen to channel Id 19<span>`,
    remoteControl: `<khao-remote-control channelId="19" command="visible"><khao-remote-control>`,
  },
  render: render,
};

export const VisibleBecomesHidden: Story = {
  args: {
    visibility: "visible",
    channelId: "10",
    slot: `<span>I am visible and i listen to channel Id 10<span>`,
    remoteControl: `<khao-remote-control channelId="10" command="hidden"><khao-remote-control>`,
  },
  render: render,
};
