import type { Meta, StoryObj } from "@storybook/web-components-vite";
import KhmerSpeaker from "../../src/components/speakers/khmerSpeaker/KhmerSpeaker.svelte";

const meta = {
  title: "Speakers/KhmerSpeaker",
  component: "khao-khmer-speaker",
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
} satisfies Meta<KhmerSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "អាម៉ុកត្រី",
  },
};

export const WithShortText: Story = {
  args: {
    text: "បាយ",
  },
};

export const WithLongText: Story = {
  args: {
    text: "នំបញ្ចុកសម្លខ្មែរ",
  },
};

export const WithTransliteration: Story = {
  args: {
    width: 340,
  } as any,
  render: ({ width }: any) => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; width: ${width}px; font-family: sans-serif;">
      <div><khao-khmer-speaker text="អាម៉ុកត្រី" transliteration="Amok trei"></khao-khmer-speaker></div>
      <div><khao-khmer-speaker text="បាយ" transliteration="Bay"></khao-khmer-speaker></div>
      <div><khao-khmer-speaker text="នំបញ្ចុកសម្លខ្មែរ" transliteration="Nom banh chok samlor Khmer"></khao-khmer-speaker></div>
    </div>`,
};

export const WithExplicitTitle: Story = {
  args: {
    text: "អាម៉ុកត្រី",
    transliteration: "Amok trei",
    title: "Amok trei - tap to hear the Khmer pronunciation",
  },
};

export const WithAriaLabel: Story = {
  args: {
    text: "បាយ",
    transliteration: "Bay",
    ariaLabel: "Anhören: Bay (បាយ) auf Khmer",
  },
};

export const InsideText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<p style="line-height: 1.8rem; width: ${width}px">
      Das kambodschanische Curry heißt <khao-khmer-speaker text="អាម៉ុកត្រី"></khao-khmer-speaker>.
      Gekochter Reis wird als <khao-khmer-speaker text="បាយ"></khao-khmer-speaker> bezeichnet.
      Eine beliebte Nudelsuppe ist <khao-khmer-speaker text="នំបញ្ចុកសម្លខ្មែរ"></khao-khmer-speaker>.
    </p>`,
};

export const InProseText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<div style="width: ${width}px; line-height: 1.8rem; font-family: sans-serif;">
      <p>
        In Kambodscha sind
        <khao-khmer-speaker text="អាម៉ុកត្រី" transliteration="Amok trei"></khao-khmer-speaker>
        und
        <khao-khmer-speaker text="នំបញ្ចុកសម្លខ្មែរ" transliteration="Nom banh chok samlor Khmer"></khao-khmer-speaker>
        sehr bekannt. Oft wird dazu
        <khao-khmer-speaker text="បាយ" transliteration="Bay"></khao-khmer-speaker>
        serviert.
      </p>
    </div>`,
};
