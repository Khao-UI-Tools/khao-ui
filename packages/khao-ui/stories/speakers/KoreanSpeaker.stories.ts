import type { Meta, StoryObj } from "@storybook/web-components-vite";
import KoreanSpeaker from "../../src/components/speakers/koreanSpeaker/KoreanSpeaker.svelte";

const meta = {
  title: "Speakers/KoreanSpeaker",
  component: "khao-korean-speaker",
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
} satisfies Meta<KoreanSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "김치찌개",
  },
};

export const WithShortText: Story = {
  args: {
    text: "밥",
  },
};

export const WithLongText: Story = {
  args: {
    text: "해물순두부찌개와 돌솥비빔밥",
  },
};

export const WithTransliteration: Story = {
  args: {
    width: 340,
  } as any,
  render: ({ width }: any) => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; width: ${width}px; font-family: sans-serif;">
      <div><khao-korean-speaker text="김치찌개" transliteration="Kimchi jjigae"></khao-korean-speaker></div>
      <div><khao-korean-speaker text="비빔밥" transliteration="Bibimbap"></khao-korean-speaker></div>
      <div><khao-korean-speaker text="해물순두부찌개와 돌솥비빔밥" transliteration="Haemul sundubu jjigae wa dolsot bibimbap"></khao-korean-speaker></div>
    </div>`,
};

export const WithExplicitTitle: Story = {
  args: {
    text: "김치찌개",
    transliteration: "Kimchi jjigae",
    title: "Kimchi jjigae - tap to hear the Korean pronunciation",
  },
};

export const WithAriaLabel: Story = {
  args: {
    text: "비빔밥",
    transliteration: "Bibimbap",
    ariaLabel: "Anhören: Bibimbap (비빔밥) auf Koreanisch",
  },
};

export const InsideText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<p style="line-height: 1.8rem; width: ${width}px">
      Der koreanische Klassiker heißt <khao-korean-speaker text="비빔밥"></khao-korean-speaker>.
      Eine würzige Suppe ist <khao-korean-speaker text="김치찌개"></khao-korean-speaker>.
      Gedämpfte Teigtaschen werden als <khao-korean-speaker text="만두"></khao-korean-speaker> serviert.
    </p>`,
};

export const InProseText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<div style="width: ${width}px; line-height: 1.8rem; font-family: sans-serif;">
      <p>
        In der koreanischen Küche gehören
        <khao-korean-speaker text="비빔밥" transliteration="Bibimbap"></khao-korean-speaker>
        und
        <khao-korean-speaker text="김치찌개" transliteration="Kimchi jjigae"></khao-korean-speaker>
        zu den bekanntesten Gerichten. Häufig werden sie mit
        <khao-korean-speaker text="밥" transliteration="Bap"></khao-korean-speaker>
        und kleinen Beilagen serviert.
      </p>
    </div>`,
};
