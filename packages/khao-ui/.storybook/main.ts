import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  staticDirs: ["../storybook-assets"],
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|ts|svelte)"],
  viteFinal(config, { configType }) {
    config.base = process.env.BASE_PATH || config.base;
    return config;
  },
};

export default config;
