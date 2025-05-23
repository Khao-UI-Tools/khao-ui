import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { version } from "./package.json";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        style: "@der-reiskoch/khao-malet/dist/khao-malet.css",
        ad: "src/components/ads/ad/Ad.svelte",
        badge: "src/components/misc/badge/Badge.svelte",
        button: "src/components/buttons/button/Button.svelte",
        "button-pay-pal-donate":
          "src/components/buttons/payPalDonateButton/PayPalDonateButton.svelte",
        "button-steady":
          "src/components/buttons/steadyButton/SteadyButton.svelte",
        card: "src/components/cards/card/Card.svelte",
        chip: "src/components/misc/chip/Chip.svelte",
        "content-with-icon":
          "src/components/misc/contentWithIcon/ContentWithIcon.svelte",
        "copy-to-clipboard":
          "src/components/buttons/copyToClipboard/CopyToClipboard.svelte",
        icon: "src/icons/Icon.svelte",
        "icon-button": "src/components/buttons/iconButton/IconButton.svelte",
        image: "src/components/media/image/Image.svelte",
        "infinite-scroll":
          "src/components/misc/infiniteScroll/InfiniteScroll.svelte",
        link: "src/components/links/link/Link.svelte",
        "marker-pin": "src/components/map/markerPin/MarkerPin.svelte",
        pagination: "src/components/pagination/pagination/Pagination.svelte",
        "remote-control":
          "src/components/misc/remoteControlled/RemoteControl.svelte",
        "remote-controlled":
          "src/components/misc/remoteControlled/RemoteControlled.svelte",
        "share-buttons":
          "src/components/widgets/shareButtons/ShareButtons.svelte",
        "scroll-to-top":
          "src/components/buttons/scrollToTop/scrollToTop.svelte",
        "select-field": "src/components/forms/selectfield/SelectField.svelte",
        "social-buttons":
          "src/components/widgets/socialButtons/SocialButtons.svelte",
        "switch-button":
          "src/components/forms/switchbutton/SwitchButton.svelte",
        "tab-bar": "src/components/tabs/tabBar/TabBar.svelte",
        "text-field": "src/components/forms/textfield/TextField.svelte",
        video: "src/components/media/video/Video.svelte",
        "wake-lock-switch":
          "src/components/widgets/wakeLockSwitch/WakeLockSwitch.svelte",
      },
      output: {
        dir: "dist/",
        experimentalMinChunkSize: 5000,
        entryFileNames: `js/khao-ui-[name]-${version}.js`,
        chunkFileNames: `js/khao-ui-svelte-[name]-${version}.js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css")
            return `css/khao-ui-${version}.css`;
          return `css/${assetInfo.name}`;
        },
      },
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
