import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextEslint from '@eslint/eslintrc'
import eslintJs from '@eslint/js'
// @ts-expect-error
import eslintConfigNext from 'eslint-config-next'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ['next'],
    rules: {
      // Disable the rule enforcing entity escaping for apostrophes and quotes in JSX
      "react/no-unescaped-entities": "off"
    }
  }),
  ...eslintJs.configs.recommended
];

export default eslintConfig;
