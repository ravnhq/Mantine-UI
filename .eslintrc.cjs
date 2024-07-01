module.exports = {
  root: true,
  extends: [
    "plugin:storybook/recommended",
    "@ravnhq/eslint-config",
    "@ravnhq/eslint-config/react",
  ],
  rules: {
    "filenames/match-exported": "off",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ["!.storybook"],
}
