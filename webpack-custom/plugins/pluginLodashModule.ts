/**
 * @docs: https://github.com/lodash/lodash-webpack-plugin
 *
 */

import webpack from 'webpack';
import LodashModulePlugin from 'lodash-webpack-plugin';

export const pluginLodashModule: webpack.Plugin = new LodashModulePlugin({
  paths: true,
  guards: false,
  cloning: false,
  caching: false,
  exotics: false,
  unicode: false,
  currying: false,
  metadata: false,
  chaining: false,
  deburring: false,
  memoizing: false,
  coercions: false,
  shorthands: false,
  flattening: false,
  collections: false,
  placeholders: false,
});
