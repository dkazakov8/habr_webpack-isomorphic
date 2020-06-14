/**
 * @docs: https://github.com/babel/babel-loader
 *
 */

import webpack from 'webpack';

import { env } from '../../env';
import babelConfigServer from '../../babel.config';

const presetEnvOptions = env.POLYFILLING
  ? {
      corejs: 3,
      useBuiltIns: 'usage',
    }
  : undefined;

export const loaderBabel: webpack.RuleSetLoader = {
  loader: 'babel-loader',
  options: {
    presets: [['@babel/preset-env', presetEnvOptions]],
    plugins: [...babelConfigServer.plugins, '@babel/plugin-transform-react-jsx', 'lodash'],
  },
};
