import {ResolveOptions} from 'webpack';
import {BuildOptions} from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {
            '@': options.paths.src,
        },
    };
}