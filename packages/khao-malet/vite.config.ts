import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: ["css/index.css"],

      output: {
        dir: "dist",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "index.css") {
            return `khao-malet.css`;
          }
          return `${assetInfo.name}`;
        },
      },
    },
  },
});
