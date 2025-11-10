import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactNamingConventionPlugin from "eslint-plugin-react-naming-convention";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      js,
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
      "react-naming-convention": reactNamingConventionPlugin,
    },
  },

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "react-naming-convention": reactNamingConventionPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react-naming-convention/context-name": "warn",
      "react-naming-convention/filename": ["warn", { rule: "PascalCase" }],
      "react-naming-convention/filename-extension": ["warn", "as-needed"],
      "react-naming-convention/use-state": "warn",
      "react/jsx-pascal-case": [
        "warn",
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      "react/forbid-elements": [
        "error",
        {
          forbid: [
            {
              element: "a",
              message: "Use <Link> component instead of <a>.",
            },
            {
              element: "button",
              message: "Use <Button> component instead of <button>.",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-unescaped-entities": "warn",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off", // NOTE: Enable at a later date
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "memberLike",
          modifiers: ["readonly"],
          format: ["UPPER_CASE"],
        },
      ],
    },
  },
  {
    files: ["*.config.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  globalIgnores(["node_modules/*", "dist/*"]),
]);
