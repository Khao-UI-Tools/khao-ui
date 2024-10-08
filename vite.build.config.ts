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
        entryFileNames: `js/khao-ui-v${version}.js`,
        chunkFileNames: `js/[name]-v${version}.js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "index.css")
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
