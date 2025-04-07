import type { Meta, StoryObj } from "@storybook/svelte-vite";
import PayPalDonateButton from "../../src/components/buttons/payPalDonateButton/PayPalDonateButton.svelte";

const meta = {
  title: "Buttons/PayPalDonateButton",
  component: "khao-button-pay-pal-donate",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      type: "string",
    },
    title: {
      control: "text",
      type: "string",
    },
    hostedButtonId: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<PayPalDonateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "PalPay",
    title: "Unterstütze meinen Blog über PayPal",
    hostedButtonId: "J4B3UGYM7V7W6",
  },
};
