import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ChineseSpeaker from "../../src/components/speakers/chineseSpeaker/ChineseSpeaker.svelte";

const meta = {
  title: "Speakers/ChineseSpeaker",
  component: "khao-chinese-speaker",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      type: "string",
    },
    variant: {
      control: "select",
      options: ["mandarin", "cantonese"],
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
} satisfies Meta<ChineseSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MandarinDefault: Story = {
  args: {
    text: "麻婆豆腐",
    variant: "mandarin",
  },
};

export const CantoneseDefault: Story = {
  args: {
    text: "叉燒包",
    variant: "cantonese",
  },
};

export const WithTransliteration: Story = {
  args: {
    width: 360,
  } as any,
  render: ({ width }: any) => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; width: ${width}px; font-family: sans-serif;">
      <div><khao-chinese-speaker text="麻婆豆腐" variant="mandarin" transliteration="Mapo doufu"></khao-chinese-speaker></div>
      <div><khao-chinese-speaker text="小籠包" variant="mandarin" transliteration="Xiaolongbao"></khao-chinese-speaker></div>
      <div><khao-chinese-speaker text="叉燒包" variant="cantonese" transliteration="Cha siu baau"></khao-chinese-speaker></div>
    </div>`,
};

export const WithExplicitTitle: Story = {
  args: {
    text: "叉燒包",
    variant: "cantonese",
    transliteration: "Cha siu baau",
    title: "Cha siu baau - tap to hear the Cantonese pronunciation",
  },
};

export const WithAriaLabel: Story = {
  args: {
    text: "麻婆豆腐",
    variant: "mandarin",
    transliteration: "Mapo doufu",
    ariaLabel: "Anhören: Mapo doufu (麻婆豆腐) auf Mandarin",
  },
};

export const InsideText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<p style="line-height: 1.8rem; width: ${width}px">
      Das Sichuan-Gericht heißt <khao-chinese-speaker text="麻婆豆腐" variant="mandarin"></khao-chinese-speaker>.
      Ein klassisches Dim-Sum ist <khao-chinese-speaker text="叉燒包" variant="cantonese"></khao-chinese-speaker>.
      Gedämpfte Teigtaschen heißen <khao-chinese-speaker text="小籠包" variant="mandarin"></khao-chinese-speaker>.
    </p>`,
};

export const InProseText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<div style="width: ${width}px; line-height: 1.8rem; font-family: sans-serif;">
      <p>
        In der Sichuan-Küche ist
        <khao-chinese-speaker text="麻婆豆腐" variant="mandarin" transliteration="Mapo doufu"></khao-chinese-speaker>
        sehr bekannt. In der kantonesischen Dim-Sum-Tradition gehört
        <khao-chinese-speaker text="叉燒包" variant="cantonese" transliteration="Cha siu baau"></khao-chinese-speaker>
        zu den Klassikern.
      </p>
    </div>`,
};
