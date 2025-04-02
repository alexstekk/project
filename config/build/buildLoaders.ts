import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options;

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

    const babelLoader = buildBabelLoader(options)

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
            getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
            }),
        }
    };

    const reactHotLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    };

    const loaders = [
        // babelLoader,
        tsLoader,
        cssLoader,
        imagesLoader,
        svgLoader,
    ];


    return loaders;
}