import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ThaiSpeaker from "../../src/components/buttons/thaiSpeaker/ThaiSpeaker.svelte";

const meta = {
  title: "Buttons/ThaiSpeaker",
  component: "khao-thai-speaker",
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
    width: {
      control: { type: "range", min: 100, max: 800, step: 10 },
      type: "number",
    },
  },
} satisfies Meta<ThaiSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "แกงมัสมั่น",
    title: "Listen to Thai word",
  },
};

export const ShortWord: Story = {
  args: {
    text: "ข้าว",
    title: "Listen: rice",
  },
};

export const LongName: Story = {
  args: {
    text: "แกงจืดปลาหมึกแห้งซี่โครงหมูหัวไชเท้า",
    title: "Listen to Thai dish name",
  },
};

export const WithTransliteration: Story = {
  args: {
    width: 320,
  } as any,
  render: ({ width }: any) => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; width: ${width}px; font-family: sans-serif;">
      <div><khao-thai-speaker text="แกงมัสมั่น" transliteration="Gaeng Matsaman" title="Listen: Massaman curry"></khao-thai-speaker></div>
      <div><khao-thai-speaker text="ข้าวสวย" transliteration="Khao Suai" title="Listen: steamed rice"></khao-thai-speaker></div>
      <div><khao-thai-speaker text="แกงจืดปลาหมึกแห้งซี่โครงหมูหัวไชเท้า" transliteration="Gaeng Jued Pla Muek Haeng Si Khroong Muu Hua Chai Thao" title="Listen: clear soup dish"></khao-thai-speaker></div>
    </div>`,
};

export const InsideText: Story = {
  args: { width: 400 } as any,
  render: ({ width }: any) =>
    `<p style="line-height: 1.8rem; width: ${width}px">
      Das Thai-Gericht heißt <khao-thai-speaker text="แกงมัสมั่น" title="Listen: Massaman curry"></khao-thai-speaker> und ist sehr lecker.
      Gekochter Reis heißt <khao-thai-speaker text="ข้าวสวย" title="Listen: steamed rice"></khao-thai-speaker> auf Thailändisch.
      Eine aufwändige Spezialität ist <khao-thai-speaker text="แกงจืดปลาหมึกแห้งซี่โครงหมูหัวไชเท้า" title="Listen: clear soup dish"></khao-thai-speaker>, eine klare Suppe.
    </p>`,
};

export const InProseText: Story = {
  args: { width: 400 } as any,
  render: ({ width }: any) =>
    `<div style="width: ${width}px; line-height: 1.8rem; font-family: sans-serif;">
      <p>
        Eines der bekanntesten Gerichte der Thai-Küche ist
        <khao-thai-speaker text="แกงมัสมั่น" transliteration="Gaeng Matsaman" title="Listen: Massaman curry"></khao-thai-speaker>,
        ein reichhaltiges Curry aus dem Süden Thailands. Dazu wird gekochter Reis
        <khao-thai-speaker text="ข้าวสวย" transliteration="Khao Suai" title="Listen: steamed rice"></khao-thai-speaker>
        gereicht. Eine besonders aufwändige Spezialität ist
        <khao-thai-speaker text="แกงจืดปลาหมึกแห้งซี่โครงหมูหัวไชเท้า" transliteration="Gaeng Jued Pla Muek Haeng Si Khroong Muu Hua Chai Thao" title="Listen: clear soup dish"></khao-thai-speaker>,
        eine klare Suppe mit getrockneten Tintenfischen und Schweinerippchen.
      </p>
    </div>`,
};
