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
        project: "./tsconfig.base.json",
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
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      // "no-unused-vars": "error",
      ...airbnb.rules,
      ...prettier.rules,
      "no-inline-comments": "off",
    },
  },
  // {

  //   languageOptions: {
  //     parser, // Again, ensure parser is set correctly here
  //   },
  //   // rules: {
  //   //   "@typescript-eslint/no-unused-vars": "error",
  //   // },
  // },
];

// // eslint.config.js
// module.exports = [
//   {
//     files: ["**/*.{js,jsx,ts,tsx}"], // Specify the files to lint
//     languageOptions: {
//       parser: require("@typescript-eslint/parser"), // Use the TypeScript parser correctly
//       parserOptions: {
//         project: "./tsconfig.base.json",
//         tsconfigRootDir: __dirname,
//         sourceType: "module",
//         ecmaVersion: "latest",
//       },
//     },
//     plugins: {
//       "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
//       prettier: require("eslint-plugin-prettier"),
//     },
//     rules: {
//       "no-console": "warn",
//       "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
//       "prettier/prettier": "error",
//     },
//   },
// ];
