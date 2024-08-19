import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "src/components/ads/Ad.svelte",
        "src/components/buttons/button/Button.svelte",
        "src/components/buttons/iconButton/IconButton.svelte",
        "src/components/buttons/payPalDonateButton/PayPalDonateButton.svelte",
        "src/components/buttons/SteadyButton.svelte",
        "src/components/cards/card/Card.svelte",
        "src/components/map/MarkerPin.svelte",
        "src/components/widgets/ShareButtons.svelte",
        "src/components/widgets/SocialButtons.svelte",
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
