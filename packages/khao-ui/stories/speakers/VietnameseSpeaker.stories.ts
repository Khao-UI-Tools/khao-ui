import type { Meta, StoryObj } from "@storybook/web-components-vite";
import VietnameseSpeaker from "../../src/components/speakers/vietnameseSpeaker/VietnameseSpeaker.svelte";

const meta = {
  title: "Speakers/VietnameseSpeaker",
  component: "khao-vietnamese-speaker",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      type: "string",
    },
    title: {
      control: "text",
      type: "string",
    },
    ariaLabel: {
      control: "text",
      type: "string",
    },
    width: {
      control: { type: "range", min: 100, max: 800, step: 10 },
      type: "number",
    },
  },
} satisfies Meta<VietnameseSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Phở bò",
  },
};

export const WithShortText: Story = {
  args: {
    text: "Cơm",
  },
};

export const WithLongText: Story = {
  args: {
    text: "Bánh cuốn nhân thịt với hành phi giòn",
  },
};

export const WithMultipleExamples: Story = {
  args: {
    width: 320,
  } as any,
  render: ({ width }: any) => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; width: ${width}px; font-family: sans-serif;">
      <div><khao-vietnamese-speaker text="Phở bò"></khao-vietnamese-speaker></div>
      <div><khao-vietnamese-speaker text="Bún chả"></khao-vietnamese-speaker></div>
      <div><khao-vietnamese-speaker text="Bánh cuốn nhân thịt với hành phi giòn"></khao-vietnamese-speaker></div>
    </div>`,
};

export const WithExplicitTitle: Story = {
  args: {
    text: "Phở bò",
    title: "Pho bo - tap to hear the Vietnamese pronunciation",
  },
};

export const WithAriaLabel: Story = {
  args: {
    text: "Phở bò",
    ariaLabel: "Anhören: Phở bò",
  },
};

export const InsideText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<p style="line-height: 1.8rem; width: ${width}px">
      Die vietnamesische Nudelsuppe heißt <khao-vietnamese-speaker text="Phở bò"></khao-vietnamese-speaker> und wird oft mit frischen Kräutern serviert.
      Gegrillte Fleischbällchen mit Reisnudeln heißen <khao-vietnamese-speaker text="Bún chả"></khao-vietnamese-speaker>.
      Ein feines gedämpftes Gericht ist <khao-vietnamese-speaker text="Bánh cuốn nhân thịt với hành phi giòn"></khao-vietnamese-speaker>.
    </p>`,
};
