import { dirname, join } from "path";
import { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
  ],
  docs: {},
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },
  staticDirs: ["../storybook-assets"],
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|ts|svelte)"],
  async viteFinal(config, { configType }) {
    config.base = process.env.BASE_PATH || config.base;
    // Configure Vite to properly handle MDX files
    config.assetsInclude = [/\.mdx$/];

    return config;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
