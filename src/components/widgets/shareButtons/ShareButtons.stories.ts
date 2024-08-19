import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ShareButtons from "./ShareButtons.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "widgets/ShareButtons",
  component: "khao-share-buttons",
  tags: ["autodocs"],
  argTypes: {
    printButtonLabel: { control: "text", type: "string" },
    printButtonTitle: { control: "text", type: "string" },
    facebookButtonLabel: { control: "text", type: "string" },
    facebookButtonTitle: { control: "text", type: "string" },
    showPinterestButton: { type: "string" },
    pinterestButtonLabel: { control: "text", type: "string" },
    pinterestButtonTitle: { control: "text", type: "string" },
    sharedUrl: { control: "text", type: "string" },
    sharedMediaUrl: { control: "text", type: "string" },
    sharedDescription: { control: "text", type: "string" },
    sharedTitle: { control: "text", type: "string" },
  },
} satisfies Meta<ShareButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    printButtonLabel: "Drucken",
    printButtonTitle: "Diese Seite Drucken",
    facebookButtonLabel: "Facebook",
    facebookButtonTitle: "Auf Facebook teilen",
    showPinterestButton: "true",
    pinterestButtonLabel: "Pinterest",
    pinterestButtonTitle: "Auf Pinterest teilen",
    sharedUrl:
      "https://www.der-reiskoch.de/rezepte/pak-choi-mit-gelber-bohnenpaste/",
    sharedMediaUrl:
      "https://bilder.koch-reis.de/pin/v2/?id=1352&title=Pak+Choi+mit+gelber+Bohnenpaste",
    sharedDescription: "Thailändisches Pad Pak Choi Tao Djiau",
    sharedTitle: "Pak Choi mit gelber Bohnenpaste",
  },
};
