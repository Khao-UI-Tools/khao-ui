import type { Meta, StoryObj } from "@storybook/web-components-vite";
import LaoSpeaker from "../../src/components/speakers/laoSpeaker/LaoSpeaker.svelte";

const meta = {
  title: "Speakers/LaoSpeaker",
  component: "khao-lao-speaker",
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
} satisfies Meta<LaoSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "ເຂົ້າໜຽວ",
  },
};

export const WithShortText: Story = {
  args: {
    text: "ລາບ",
  },
};

export const WithLongText: Story = {
  args: {
    text: "ເຝີເນື້ອໃສ່ຜັກຫອມສົດ",
  },
};

export const WithTransliteration: Story = {
  args: {
    width: 340,
  } as any,
  render: ({ width }: any) => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; width: ${width}px; font-family: sans-serif;">
      <div><khao-lao-speaker text="ເຂົ້າໜຽວ" transliteration="Khao niao"></khao-lao-speaker></div>
      <div><khao-lao-speaker text="ລາບ" transliteration="Lap"></khao-lao-speaker></div>
      <div><khao-lao-speaker text="ເຝີເນື້ອໃສ່ຜັກຫອມສົດ" transliteration="Feu nuea sai phak hom sot"></khao-lao-speaker></div>
    </div>`,
};

export const WithExplicitTitle: Story = {
  args: {
    text: "ເຂົ້າໜຽວ",
    transliteration: "Khao niao",
    title: "Khao niao - tap to hear the Lao pronunciation",
  },
};

export const WithAriaLabel: Story = {
  args: {
    text: "ລາບ",
    transliteration: "Lap",
    ariaLabel: "Anhören: Lap (ລາບ) auf Lao",
  },
};

export const InsideText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<p style="line-height: 1.8rem; width: ${width}px">
      In Laos wird <khao-lao-speaker text="ເຂົ້າໜຽວ"></khao-lao-speaker> oft zu vielen Gerichten serviert.
      Der bekannte Hackfleischsalat heißt <khao-lao-speaker text="ລາບ"></khao-lao-speaker>.
      Eine kräftige Nudelsuppe ist <khao-lao-speaker text="ເຝີເນື້ອໃສ່ຜັກຫອມສົດ"></khao-lao-speaker>.
    </p>`,
};

export const InProseText: Story = {
  args: { width: 420 } as any,
  render: ({ width }: any) =>
    `<div style="width: ${width}px; line-height: 1.8rem; font-family: sans-serif;">
      <p>
        In der laotischen Küche gehören
        <khao-lao-speaker text="ເຂົ້າໜຽວ" transliteration="Khao niao"></khao-lao-speaker>
        und
        <khao-lao-speaker text="ລາບ" transliteration="Lap"></khao-lao-speaker>
        zu den bekanntesten Speisen. Dazu passt auch eine Schale
        <khao-lao-speaker text="ເຝີ" transliteration="Feu"></khao-lao-speaker>.
      </p>
    </div>`,
};
