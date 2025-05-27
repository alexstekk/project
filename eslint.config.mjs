import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import alexstekk from 'eslint-plugin-alexstekk';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores([
        'build',
        'config',
        'json-server',
        'storybook-static',
        'scripts',
        'cypress',
    ]),
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    importPlugin.flatConfigs.recommended,
    eslintConfigPrettier,
    {
        files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            js,
            'react-hooks': pluginHooks,
            alexstekk,
            'unused-imports': unusedImports,
        },
        extends: ['js/recommended'],

        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react/react-in-jsx-scope': 'off',
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
            semi: 1,
            'object-curly-spacing': ['error', 'always'],
            quotes: [2, 'single', { avoidEscape: true }],
            'react/display-name': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            noUnusedParameters: 'off',
            'no-undef': 'off',
            'alexstekk/path-checker': ['error', { alias: '@' }],
            'alexstekk/public-api-imports': [
                'error',
                {
                    alias: '@',
                    testFilesPatterns: [
                        '**/*.test.*',
                        '**/*.story.*',
                        '**/StoreDecorator.tsx',
                    ],
                },
            ],
            'alexstekk/layer-imports': [
                'error',
                {
                    alias: '@',
                    ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
                },
            ],
            '@typescript-eslint/ban-ts-comment': 'off',
            // 'unused-imports/no-unused-imports': 'error',
            'import/order': [
                'error',
                {
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                        },
                        {
                            pattern: './**.module.*',
                            group: 'internal',
                            position: 'after',
                        },
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: false,
                    },
                },
            ],
            'import/no-unresolved': 'off',
            'import/named': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-namespace': 'off',
        },
    },
    {
        files: ['*.ts', '*.tsx', '*.mjs'],
        rules: {
            'import/no-unresolved': 'off',
        },
    },
]);
