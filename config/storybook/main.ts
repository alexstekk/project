import type {StorybookConfig} from '@storybook/react-webpack5';
import {BuildPaths} from '../build/types/config';
// @ts-ignore
import path from 'path';
import {buildCssLoader} from '../build/loaders/buildCssLoader';
// @ts-ignore
import webpack, {ProvidePlugin} from 'webpack';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-actions',
        'storybook-addon-mock',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config) => {

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

        config?.plugins?.push(new ProvidePlugin({
            React: 'react',
        }));

        // @ts-ignore
        config.module.rules = config?.module?.rules?.map((rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return {...rule, exclude: /\.svg$/i};
            }

            return rule;
        });


        config?.module?.rules?.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        config?.plugins?.push(new webpack.DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook')
        }));

        return config;
    },
};
export default config;
