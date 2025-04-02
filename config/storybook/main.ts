import type {StorybookConfig} from '@storybook/react-webpack5';
import {BuildPaths} from '../build/types/config';
import path from 'path';
import {buildCssLoader} from '../build/loaders/buildCssLoader';
import webpack, {ProvidePlugin} from 'webpack';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
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
            src: path.resolve(__dirname, '..', '..', 'src')
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
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook')
        }));

        return config;
    },
};
export default config;
