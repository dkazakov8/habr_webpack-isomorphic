/**
 * @docs: https://webpack.js.org/configuration/output
 *
 */

import webpack from 'webpack';

import { env } from '../../env';
import { paths } from '../../paths';

export const configOutput: webpack.Configuration['output'] = {
  path: paths.buildPath,
  filename: env.FILENAME_HASH ? '[name].[contenthash].js' : '[name].js',
  publicPath: '/',
};
