import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "src/components/ads/Ads.svelte",
        "src/components/buttons/PayPalDonateButton.svelte",
        "src/components/buttons/SteadyButton.svelte",
        "src/components/map/MarkerPin.svelte",
      ],
      output: {
        dir: "dist/split/",
        entryFileNames: `components/[name]-v${pkg.version}.js`,
        chunkFileNames: `components/[name]-v${pkg.version}.js`,
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
