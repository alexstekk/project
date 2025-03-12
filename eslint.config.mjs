// eslint.config.js
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
// import pluginRefresh from 'eslint-plugin-react-refresh';
import pluginImport from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { ignores: ['build', 'config'] }, // Этот должно быть здесь в отдельном объекте, чтобы применяться глобально
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        settings: {
            react: {
                version: 'detect',
            },
            // https://github.com/import-js/eslint-import-resolver-typescript#configuration
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
    // pluginRefresh.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginImport.flatConfigs.recommended,
    pluginImport.flatConfigs.typescript,
    ...tseslint.configs.recommended,
    {
        plugins: {
            'react-hooks': pluginHooks,
        },
        rules: {
            ...pluginHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn', // or "error"
                {
                    'argsIgnorePattern': '^_',
                    'varsIgnorePattern': '^_',
                    'caughtErrorsIgnorePattern': '^_'
                }
            ],
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
            'semi': 1,
            'object-curly-spacing': ['error', 'always'],
            'quotes': [2, 'single', { 'avoidEscape': true }]
        },
    },
];