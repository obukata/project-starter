import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: { js },
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
      },
    },
    extends: ["js/recommended"]
  },
  {
    rules: {},
  },
  globalIgnores(["**/lib/*.js", "**/modules/*.js"]),
]);

// const {
//   defineConfig,
//   globalIgnores,
// } = require("eslint/config");

// const globals = require("globals");
// const js = require("@eslint/js");

// const {
//   FlatCompat,
// } = require("@eslint/eslintrc");

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all
// });

// module.exports = defineConfig([
//   ...compat.extends("standard", "eslint-config-prettier"),
//   {
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//       },

//       ecmaVersion: "latest",
//       parserOptions: {},
//     },
//   },
//   globalIgnores(["**/lib/*.js", "**/modules/*.js"])
// ]);
