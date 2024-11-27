// eslint.config.js
const airbnb = require("eslint-config-airbnb");
const prettier = require("eslint-config-prettier");
const typescript = require("@typescript-eslint/eslint-plugin");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const parser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser, // Correct way to define parser in flat config
      parserOptions: {
        project: ["./tsconfig.base.json", "./packages/shared/RTC-UI/tsconfig.storybook.json"],
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaVersion: "latest",
      },
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      prettier: require("eslint-plugin-prettier"),
      react: react,
      "react-hooks": reactHooks,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      // "no-unused-vars": "error",
      ...airbnb.rules,
      ...prettier.rules,
      "no-inline-comments": "off",
    },
  },
  // {
  //   extends: [
  //     // Include your existing ESLint configurations here
  //     "eslint:recommended",
  //     "plugin:react/recommended",
  //     "plugin:storybook/recommended", // Add Storybook plugin
  //   ],
  //   plugins: ["storybook"], // Ensure 'storybook' is in the plugins array
  //   // or whatever matches stories specified in .storybook/main.js
  //   files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
  //   languageOptions: {
  //     parser, // Correct way to define parser in flat config
  //     parserOptions: {
  //       project: ["packagessharedRTC-UI\tsconfig.storybook.json", "packagessharedRTC-UI\tsconfig.storybook.json"],
  //       tsconfigRootDir: __dirname,
  //       sourceType: "module",
  //       ecmaVersion: "latest",
  //     },
  //     globals: {
  //       browser: true,
  //       node: true,
  //       es2021: true,
  //     },
  //   },
  //   rules: {
  //     // // example of overriding a rule
  //     // "storybook/hierarchy-separator": "error",
  //     // // example of disabling a rule
  //     // "storybook/default-exports": "off",
  //   },
  // },
];
