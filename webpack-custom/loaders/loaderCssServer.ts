/**
 * @docs: https://github.com/webpack-contrib/css-loader
 *
 */

import webpack from 'webpack';

export const loaderCssServer: webpack.RuleSetLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    onlyLocals: true,
    modules: {
      localIdentName: '[folder]__[local]',
    },
  },
};
