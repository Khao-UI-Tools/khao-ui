import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "src/components/ads/Ad.svelte",
        "src/components/buttons/Button.svelte",
        "src/components/buttons/IconButton.svelte",
        "src/components/buttons/PayPalDonateButton.svelte",
        "src/components/buttons/SteadyButton.svelte",
        "src/components/widgets/ShareButtons.svelte",
        "src/components/widgets/SocialButtons.svelte",
        "src/components/map/MarkerPin.svelte",
      ],
      output: {
        dir: "dist/split/",
        entryFileNames: `components/[name].js`,
        chunkFileNames: `components/[name].js`,
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
