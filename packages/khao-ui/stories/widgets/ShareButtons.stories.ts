import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ShareButtons from "../../src/components/widgets/shareButtons/ShareButtons.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "widgets/ShareButtons",
  component: "khao-share-buttons",
  tags: ["autodocs"],
  argTypes: {
    shareButtonLabel: { control: "text", type: "string" },
    shareButtonTitle: { control: "text", type: "string" },
    sharedUrl: { control: "text", type: "string" },
    sharedMediaUrl: { control: "text", type: "string" },
    sharedDescription: { control: "text", type: "string" },
    sharedTitle: { control: "text", type: "string" },
    showPrintButton: { type: "string" },
    printButtonLabel: { control: "text", type: "string" },
    printButtonTitle: { control: "text", type: "string" },
    facebookButtonLabel: { control: "text", type: "string" },
    facebookButtonTitle: { control: "text", type: "string" },
    showPinterestButton: { type: "string" },
    pinterestButtonLabel: { control: "text", type: "string" },
    pinterestButtonTitle: { control: "text", type: "string" },
  },
} satisfies Meta<ShareButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shareButtonLabel: "Teilen",
    shareButtonTile: "Inhalt teilen",
    sharedUrl:
      "https://www.der-reiskoch.de/rezepte/pak-choi-mit-gelber-bohnenpaste/",
    sharedMediaUrl:
      "https://bilder.koch-reis.de/pin/v2/?id=1352&title=Pak+Choi+mit+gelber+Bohnenpaste",
    sharedDescription: "Thailändisches Pad Pak Choi Tao Djiau",
    sharedTitle: "Pak Choi mit gelber Bohnenpaste",
    showPrintButton: "true",
    printButtonLabel: "Drucken",
    printButtonTitle: "Diese Seite Drucken",
    showFacebookButton: "true",
    facebookButtonLabel: "Facebook",
    facebookButtonTitle: "Auf Facebook teilen",
    showPinterestButton: "true",
    pinterestButtonLabel: "Pinterest",
    pinterestButtonTitle: "Auf Pinterest teilen",
  },
};

/*
export const Example: Story = {
  render: () =>
    `<khao-share-buttons printbuttonlabel="Drucken" printbuttontitle="Diesen Beitrag drucken" facebookbuttonlabel="Teilen" facebookbuttontitle="Auf Facebook teilen" showpinterestbutton="true" pinterestbuttonlabel="Pinnen" pinterestbuttontitle="Auf Pinterest teilen" sharedurl="https://www.der-reiskoch.de/rezepte/gebratener-reis-mit-xo-sosse/" sharedmediaurl="https://bilder.koch-reis.de/pin/v2/?id=1096&amp;title=Gebratener%20Reis%20mit%20XO%20So%c3%9fe" sharedtitle="Gebratener_Reis_mit_XO_Soße" shareddescription="Ein_Wokgericht_aus_Hongkong">
    </khao-share-buttons>`,
};
*/
