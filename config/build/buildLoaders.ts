import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const { isDev } = options;

    const imagesLoader = {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    };

    const cssLoader = buildCssLoader(isDev);

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
            getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
            }),
        },
    };

    const reactHotLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    };

    const loaders = [
        codeBabelLoader,
        tsxCodeBabelLoader,
        // tsLoader,
        imagesLoader,
        svgLoader,
        cssLoader,
    ];


    return loaders;
}