import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function buildPlugins({paths, isDev, apiUrl}: BuildOptions): webpack.WebpackPluginInstance[] {

    const plugins = [
        new webpack.ProgressPlugin({}),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl)
        })
    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshPlugin({
                    overlay: false
                },
            ),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }));
    }


    return plugins;
}