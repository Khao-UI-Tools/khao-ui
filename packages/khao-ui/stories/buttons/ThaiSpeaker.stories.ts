import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ThaiSpeaker from "../../src/components/speakers/thaiSpeaker/ThaiSpeaker.svelte";

const meta = {
  title: "Speakers/ThaiSpeaker",
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
    ariaLabel: {
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
  },
};

export const WithShortText: Story = {
  args: {
    text: "ข้าว",
  },
};

export const WithLongText: Story = {
  args: {
    text: "แกงจืดปลาหมึกแห้งซี่โครงหมูหัวไชเท้า",
  },
};

export const WithTransliteration: Story = {
  args: {
    width: 320,
  } as any,
  render: ({ width }: any) => `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; width: ${width}px; font-family: sans-serif;">
      <div><khao-thai-speaker text="แกงมัสมั่น" transliteration="Gaeng Matsaman"></khao-thai-speaker></div>
      <div><khao-thai-speaker text="ข้าวสวย" transliteration="Khao Suai"></khao-thai-speaker></div>
      <div><khao-thai-speaker text="แกงจืดปลาหมึกแห้งซี่โครงหมูหัวไชเท้า" transliteration="Gaeng Jued Pla Muek Haeng Si Khroong Muu Hua Chai Thao"></khao-thai-speaker></div>
    </div>`,
};

export const WithExplicitTitle: Story = {
  args: {
    text: "แกงมัสมั่น",
    transliteration: "Gaeng Matsaman",
    title: "Massaman curry — tap to hear the Thai pronunciation",
  },
};

export const WithAriaLabel: Story = {
  args: {
    text: "แกงมัสมั่น",
    transliteration: "Gaeng Matsaman",
    ariaLabel: "Anhören: Gaeng Matsaman (แกงมัสมั่น)",
  },
};

export const InsideText: Story = {
  args: { width: 400 } as any,
  render: ({ width }: any) =>
    `<p style="line-height: 1.8rem; width: ${width}px">
      Das Thai-Gericht heißt <khao-thai-speaker text="แกงมัสมั่น"></khao-thai-speaker> und ist sehr lecker.
      Gekochter Reis heißt <khao-thai-speaker text="ข้าวสวย"></khao-thai-speaker> auf Thailändisch.
      Eine aufwändige Spezialität ist <khao-thai-speaker text="แกงจืดปลาหมึกแห้งซี่โครงหมูหัวไชเท้า"></khao-thai-speaker>, eine klare Suppe.
    </p>`,
};

export const InProseText: Story = {
  args: { width: 400 } as any,
  render: ({ width }: any) =>
    `<div style="width: ${width}px; line-height: 1.8rem; font-family: sans-serif;">
      <p>
        Eines der bekanntesten Gerichte der Thai-Küche ist
        <khao-thai-speaker text="แกงมัสมั่น" transliteration="Gaeng Matsaman"></khao-thai-speaker>,
        ein reichhaltiges Curry aus dem Süden Thailands. Dazu wird gekochter Reis
        <khao-thai-speaker text="ข้าวสวย" transliteration="Khao Suai"></khao-thai-speaker>
        gereicht. Eine besonders aufwändige Spezialität ist
        <khao-thai-speaker text="แกงจืดปลาหมึกแห้งซี่โครงหมูหัวไชเท้า" transliteration="Gaeng Jued Pla Muek Haeng Si Khroong Muu Hua Chai Thao"></khao-thai-speaker>,
        eine klare Suppe mit getrockneten Tintenfischen und Schweinerippchen.
      </p>
    </div>`,
};
