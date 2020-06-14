/**
 * @docs: https://github.com/aackerman/circular-dependency-plugin
 *
 */

import webpack from 'webpack';
import CircularDependencyPlugin from 'circular-dependency-plugin';

export const pluginCircularDependency: webpack.Plugin = new CircularDependencyPlugin({
  exclude: /node_modules/,
  failOnError: true,
  allowAsyncCycles: false,
  cwd: process.cwd(),
});
