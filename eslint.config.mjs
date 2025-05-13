import {defineConfig, globalIgnores} from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
import alexstekk from "eslint-plugin-alexstekk";


export default defineConfig([
    globalIgnores(['build', 'config', 'json-server', 'storybook-static', 'scripts']),
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            js,
            'react-hooks': pluginHooks,
            alexstekk,
        },
        extends: [
            'js/recommended',

        ],

        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react/react-in-jsx-scope': 'off',
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
            'semi': 1,
            'object-curly-spacing': ['error', 'always'],
            'quotes': [2, 'single', {'avoidEscape': true}],
            'react/display-name': 'off',
            "no-unused-vars": ["warn", {"argsIgnorePattern": "^_", "args": "none", "vars": "all",}],
            "@typescript-eslint/no-unused-vars": ["warn", {
                "argsIgnorePattern": "^_",
                "args": "none",
                "vars": "all",
            }],
            "noUnusedParameters": 'off',
            "no-undef": "off",
            "alexstekk/path-checker": "error",
            "@typescript-eslint/ban-ts-comment": 'off'
        },


    },
]);