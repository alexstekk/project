import {BuildOptions} from "../types/config";

export function buildBabelLoader(options: BuildOptions) {

    const {isDev} = options;
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    };
}