/**
 * @docs: https://webpack.js.org/configuration/output
 *
 */

import webpack from 'webpack';

import { paths } from '../../paths';

export const configOutputServer: webpack.Configuration['output'] = {
  path: paths.buildPath,
  filename: '[name].js', // static name for server build
  publicPath: '/',
};
