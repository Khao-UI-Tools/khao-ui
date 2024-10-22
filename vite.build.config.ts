import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { version } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
          "style": "@der-reiskoch/khao-malet/css/index.css",
          "base" : "src/index.ts",  
          "badge": "src/components/misc/badge/Badge.svelte",
          "card":  "src/components/cards/card/Card.svelte",
          "chip":  "src/components/misc/chip/Chip.svelte",
          "icon": "src/icons/Icon.svelte",
          "image" : "src/components/media/image/Image.svelte",
          "infinite-scroll": "src/components/misc/infiniteScroll/InfiniteScroll.svelte",
          "button" : "src/components/buttons/button/Button.svelte", 
          "share-buttons" : "src/components/widgets/shareButtons/ShareButtons.svelte",
          "tab-bar" : "src/components/tabs/tabBar/TabBar.svelte",
          "video" : "src/components/media/video/Video.svelte"
      },
      output: {
        dir: "dist/",
        entryFileNames: `js/khao-ui-[name]-v${version}.js`,
        chunkFileNames: `js/khao-ui-chunk-[name]-v${version}.js`,
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
