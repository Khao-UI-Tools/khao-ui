import type { Meta, StoryObj } from "@storybook/web-components-vite";
import JapaneseSpeaker from "../../src/components/speakers/japaneseSpeaker/JapaneseSpeaker.svelte";

const meta = {
  title: "Speakers/JapaneseSpeaker",
  component: "khao-japanese-speaker",
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
    transliteration: {
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
} satisfies Meta<JapaneseSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "味噌汁",
  },
};

export const WithShortText: Story = {
  args: {
    text: "寿司",
  },
};

export const WithLongText: Story = {
  args: {
    text: "お好み焼きとたこ焼きの盛り合わせ",
  },
};

export const WithTransliteration: Story = {
  args: {
    width: 340,
  } as any,
  render: ({ width }: any) => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; width: ${width}px; font-family: sans-serif;">
      <div><khao-japanese-speaker text="味噌汁" transliteration="Miso shiru"></khao-japanese-speaker></div>
      <div><khao-japanese-speaker text="寿司" transliteration="Sushi"></khao-japanese-speaker></div>
      <div><khao-japanese-speaker text="お好み焼きとたこ焼きの盛り合わせ" transliteration="Okonomiyaki to takoyaki no moriawase"></khao-japanese-speaker></div>
    </div>`,
};

export const WithExplicitTitle: Story = {
  args: {
    text: "味噌汁",
    transliteration: "Miso shiru",
    title: "Miso shiru - tap to hear the Japanese pronunciation",
  },
};

export const WithAriaLabel: Story = {
  args: {
    text: "寿司",
    transliteration: "Sushi",
    ariaLabel: "Anhören: Sushi (寿司) auf Japanisch",
  },
};

export const InsideText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<p style="line-height: 1.8rem; width: ${width}px">
      Die japanische Suppe heißt <khao-japanese-speaker text="味噌汁"></khao-japanese-speaker>.
      Ein Klassiker der japanischen Küche ist <khao-japanese-speaker text="寿司"></khao-japanese-speaker>.
      Als Streetfood sind <khao-japanese-speaker text="たこ焼き"></khao-japanese-speaker> bekannt.
    </p>`,
};

export const InProseText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<div style="width: ${width}px; line-height: 1.8rem; font-family: sans-serif;">
      <p>
        In Japan wird
        <khao-japanese-speaker text="味噌汁" transliteration="Miso shiru"></khao-japanese-speaker>
        oft als begleitende Suppe serviert. Sehr beliebt sind auch
        <khao-japanese-speaker text="お好み焼き" transliteration="Okonomiyaki"></khao-japanese-speaker>
        und frisch zubereitetes
        <khao-japanese-speaker text="寿司" transliteration="Sushi"></khao-japanese-speaker>.
      </p>
    </div>`,
};
