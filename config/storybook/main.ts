import type { StorybookConfig } from '@storybook/react-webpack5';
// @ts-ignore
import path from 'path';
// @ts-ignore
import webpack, { Configuration, ProvidePlugin } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@chromatic-com/storybook',
        '@storybook/addon-actions',
        'storybook-addon-mock',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config: Configuration) => {
        const paths: BuildPaths = {
            build: '',
            entry: '',
            html: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };

        config?.resolve?.modules?.push(paths.src);
        config?.resolve?.extensions?.push('.ts', 'tsx');

        config?.module?.rules?.push(buildCssLoader(true));

        config?.plugins?.push(
            new ProvidePlugin({
                React: 'react',
            }),
        );

        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': path.resolve(__dirname, '..', '..', 'src'),
        };

        config!.module!.rules = config!.module!.rules?.map(
            // @ts-ignore
            (rule: webpack.RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            },
        );

        config?.module?.rules?.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        config?.plugins?.push(
            new webpack.DefinePlugin({
                __IS_DEV__: true,
                __API__: JSON.stringify('https://testapi.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        return config;
    },
};
export default config;
