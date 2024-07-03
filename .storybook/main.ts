import type { StorybookConfig } from "@storybook/react-vite"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { mergeConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

const storybookConfig: StorybookConfig = {
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
  viteFinal: (config) => {
    if (config.plugins) {
      config.plugins.push(
        tsconfigPaths({
          projects: [
            path.resolve(
              path.dirname(path.dirname(fileURLToPath(import.meta.url))),
              "tsconfig.json",
            ),
          ],
        }),
      )
    }

    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            // Next line will prepend the import in all you scss files as you did with your vite.config.js file
            additionalData: `@import "./../_mantine.scss";`,
          },
        },
      },
    })
  },
}
export default storybookConfig
