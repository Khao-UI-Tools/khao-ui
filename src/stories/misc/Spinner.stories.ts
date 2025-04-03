import type { Meta, StoryObj } from "@storybook/svelte-vite";
import Spinner from "../../components/misc/spinner/Spinner.svelte";

const meta = {
  title: "Misc/Spinner",
  component: "khao-spinner",
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<Spinner>;

interface renderProps {
  iconName: string;
  iconSizeFactor: string;
  iconOpacity?: string;
  slot: string;
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
