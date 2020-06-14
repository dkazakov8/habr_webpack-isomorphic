/**
 * @docs: https://github.com/jantimon/html-webpack-plugin
 *
 */

import path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { paths } from '../../paths';

export const pluginHtml: webpack.Plugin = new HtmlWebpackPlugin({
  filename: 'template.html',
  template: path.resolve(paths.templatesPath, 'template.html'),
  inject: 'body',
  minify: false,
});
