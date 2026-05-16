import type { Meta, StoryObj } from "@storybook/web-components-vite";
import BurmeseSpeaker from "../../src/components/speakers/burmeseSpeaker/BurmeseSpeaker.svelte";

const meta = {
  title: "Speakers/BurmeseSpeaker",
  component: "khao-burmese-speaker",
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
} satisfies Meta<BurmeseSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "မုန့်ဟင်းခါး",
  },
};

export const WithShortText: Story = {
  args: {
    text: "ထမင်း",
  },
};

export const WithLongText: Story = {
  args: {
    text: "အုန်းနို့ခေါက်ဆွဲ",
  },
};

export const WithTransliteration: Story = {
  args: {
    width: 340,
  } as any,
  render: ({ width }: any) => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; width: ${width}px; font-family: sans-serif;">
      <div><khao-burmese-speaker text="မုန့်ဟင်းခါး" transliteration="Mont hin gar"></khao-burmese-speaker></div>
      <div><khao-burmese-speaker text="ထမင်း" transliteration="Htamin"></khao-burmese-speaker></div>
      <div><khao-burmese-speaker text="အုန်းနို့ခေါက်ဆွဲ" transliteration="Ohn no khao swe"></khao-burmese-speaker></div>
    </div>`,
};

export const WithExplicitTitle: Story = {
  args: {
    text: "မုန့်ဟင်းခါး",
    transliteration: "Mont hin gar",
    title: "Mont hin gar - tap to hear the Burmese pronunciation",
  },
};

export const WithAriaLabel: Story = {
  args: {
    text: "ထမင်း",
    transliteration: "Htamin",
    ariaLabel: "Anhören: Htamin (ထမင်း) auf Burmese",
  },
};

export const InsideText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<p style="line-height: 1.8rem; width: ${width}px">
      Eine bekannte burmesische Suppe heißt <khao-burmese-speaker text="မုန့်ဟင်းခါး"></khao-burmese-speaker>.
      Gekochter Reis wird als <khao-burmese-speaker text="ထမင်း"></khao-burmese-speaker> bezeichnet.
      Ein beliebtes Nudelgericht ist <khao-burmese-speaker text="အုန်းနို့ခေါက်ဆွဲ"></khao-burmese-speaker>.
    </p>`,
};

export const InProseText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<div style="width: ${width}px; line-height: 1.8rem; font-family: sans-serif;">
      <p>
        In Myanmar gehören
        <khao-burmese-speaker text="မုန့်ဟင်းခါး" transliteration="Mont hin gar"></khao-burmese-speaker>
        und
        <khao-burmese-speaker text="အုန်းနို့ခေါက်ဆွဲ" transliteration="Ohn no khao swe"></khao-burmese-speaker>
        zu den bekanntesten Gerichten. Dazu passt
        <khao-burmese-speaker text="ထမင်း" transliteration="Htamin"></khao-burmese-speaker>
        als Beilage.
      </p>
    </div>`,
};
