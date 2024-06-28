module.export = {
  root: true,
  extends: ["plugin:storybook/recommended", "@ravnhq/eslint-config", "@ravnhq/eslint-config/react"],
  rules: {
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "no-console": ["error", { "allow": ["warn", "error", "info"] }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" },
    ],
  },
  parserOptions: {
    project: ["./tsconfig.json"],
  },
}
