import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import path from "node:path"
import { dts } from "rollup-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

const outputDir = "dist"
const sharedPlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ tsconfig: "./tsconfig.rollup.json" }),
  terser(),
]

const createJSBuild = () => {
  return {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
        preserveModules: true,
      },
      {
        dir: "dist/esm",
        format: "esm",
        preserveModules: true,
      },
    ],
    plugins: [...sharedPlugins],
    external: [
      "react",
      "react-dom",
      "@mantine/core",
      "@mantine/hooks",
      "@tabler/icons-react",
      "@mantine/vanilla-extract",
      "@vanilla-extract/css",
      "@vanilla-extract/dynamic",
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

const jsBuild = createJSBuild()
const dtsBuild = createDTSBuild()

export default [jsBuild, dtsBuild]
