/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  settings: { react: { version: "detect" } },
  ignorePatterns: ["dist", "node_modules", "storybook-static"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: { project: false }
    }
  ]
};