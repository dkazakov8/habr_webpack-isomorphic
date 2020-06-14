/**
 * @docs: https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { env } from '../../env';

export const pluginExtract: webpack.Plugin = new MiniCssExtractPlugin({
  filename: env.FILENAME_HASH ? '[name].[contenthash].css' : '[name].css',
  ignoreOrder: false,
});
