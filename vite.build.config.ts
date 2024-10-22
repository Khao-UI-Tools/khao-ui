import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { version } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        style: "@der-reiskoch/khao-malet/css/index.css",
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
        icon: "src/icons/Icon.svelte",
        "icon-button": "src/components/buttons/iconButton/IconButton.svelte",
        image: "src/components/media/image/Image.svelte",
        "infinite-scroll":
          "src/components/misc/infiniteScroll/InfiniteScroll.svelte",
        link: "src/components/links/link/Link.svelte",
        "marker-pin": "src/components/map/markerPin/MarkerPin.svelte",
        "share-buttons":
          "src/components/widgets/shareButtons/ShareButtons.svelte",
        "scroll-to-top":
          "src/components/buttons/scrollToTop/scrollToTop.svelte",
        "social-buttons":
          "src/components/widgets/socialButtons/SocialButtons.svelte",
        "tab-bar": "src/components/tabs/tabBar/TabBar.svelte",
        video: "src/components/media/video/Video.svelte",
      },
      output: {
        dir: "dist/",
        entryFileNames: `js/khao-ui-[name]-v${version}.js`,
        chunkFileNames: `js/svelte-chunk-[hash].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css")
            return `css/khao-ui-v${version}.css`;
          return `css/${assetInfo.name}`;
        },
        inlineDynamicImports: false,
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
