import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { version } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: ["src/index.ts"],
      output: {
        dir: "dist/",
        entryFileNames: `js/khao-ui-base-v${version}.js`,
        chunkFileNames: `js/khao-ui-[name]-v${version}.js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "index.css")
            return `css/khao-ui-v${version}.css`;
          return `css/${assetInfo.name}`;
        },
        manualChunks: {
          badge: ["src//components/misc/badge/Badge.svelte"],
          button: ["src/components/buttons/button/Button.svelte"],
          card: ["src/components/cards/card/Card.svelte"],
          chip: ["src/components/misc/chip/Chip.svelte"],
          image: ["src/components/media/image/Image.svelte"],
          "infinite-scroll": [
            "src/components/misc/infiniteScroll/InfiniteScroll.svelte",
          ],
          "share-buttons": [
            "src/components/widgets/shareButtons/ShareButtons.svelte",
          ],
          "tab-bar": ["src/components/tabs/tabBar/TabBar.svelte"],
          video: ["src/components/media/video/Video.svelte"],
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
