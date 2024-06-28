import type { StorybookConfig } from "@storybook/react-vite"
import path from "path"
const tsconfigPaths = require("vite-tsconfig-paths").default

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    if (config.plugins) {
      config.plugins.push(
        tsconfigPaths({
          projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
        }),
      )
    }

    return config
  },
}
export default config
