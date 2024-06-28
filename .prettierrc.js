const sharedConfig = require("@ravnhq/prettier-config")

module.exports = {
  overrides: [
    {
      files: ["**/*.{cjs,js,ts,jsx,tsx,scss,css}"],
      options: {
        ...sharedConfig,
      },
    },
  ],
}
