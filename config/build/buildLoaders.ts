import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    };

    const imagesLoader = {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const reactHotLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    };

    const loaders = [
        babelLoader,
        typescriptLoader,
        cssLoader,
        imagesLoader,
        svgLoader,
    ];

    if (isDev) {
        loaders.push(reactHotLoader);
    }

    return loaders;
}