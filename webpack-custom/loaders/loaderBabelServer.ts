/**
 * @docs: https://github.com/babel/babel-loader
 *
 */

import webpack from 'webpack';

import babelConfigServer from '../../babel.config';

export const loaderBabelServer: webpack.RuleSetLoader = {
  loader: 'babel-loader',
  options: {
    presets: babelConfigServer.presets,
    plugins: [...babelConfigServer.plugins, '@babel/plugin-transform-react-jsx'],
  },
};
