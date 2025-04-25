import { dirname, join } from "path";
import { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm")
  ],
  docs: {},
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
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

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
