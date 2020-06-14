/**
 * @docs: https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const loaderExtractCss: webpack.RuleSetLoader = {
  loader: MiniCssExtractPlugin.loader,
};
