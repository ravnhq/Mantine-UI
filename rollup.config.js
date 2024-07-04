import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import path from "node:path"
import { dts } from "rollup-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"

const packageJson = require("./package.json")

const outputDir = "dist"
const cssOutputPath = path.join(outputDir, "index.css")
const sharedPlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ tsconfig: "./tsconfig.rollup.json" }),
  terser(),
]

const createCSSBuild = () => {
  return {
    input: "src/index.ts",
    output: {
      file: cssOutputPath,
    },
    plugins: [
      sharedPlugins,
      postcss({
        extract: "index.css",
        minimize: true,
        use: [
          [
            "sass",
            {
              data: '@import "./_mantine.scss"; ',
            },
          ],
        ],
      }),
    ],
    external: [],
  }
}

const createJSBuild = () => {
  return {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: [
      ...sharedPlugins,
      postcss({
        extract: false,
        minimize: true,
        use: [
          [
            "sass",
            {
              data: '@import "./_mantine.scss"; ',
            },
          ],
        ],
      }),
    ],
    external: [
      "react",
      "react-dom",
      "@mantine/core",
      "@mantine/hooks",
      "@tabler/icons-react",
    ],
  }
}

const createDTSBuild = () => {
  return {
    input: "src/index.ts",
    output: [{ file: path.join(outputDir, "types.d.ts"), format: "es" }],
    plugins: [dts()],
    external: [/\.css$/],
  }
}

const cssBuild = createCSSBuild()
const jsBuild = createJSBuild()
const dtsBuild = createDTSBuild()

export default [cssBuild, jsBuild, dtsBuild]
