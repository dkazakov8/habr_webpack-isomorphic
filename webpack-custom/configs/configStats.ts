/**
 * @docs: https://webpack.js.org/configuration/stats
 *
 */

import webpack from 'webpack';

export const configStats: webpack.Configuration['stats'] = {
  colors: true,

  env: false,
  hash: false,
  depth: false,
  assets: false,
  cached: false,
  chunks: false,
  builtAt: false,
  modules: false,
  reasons: false,
  version: false,
  timings: false,
  children: false,
  warnings: false,
  publicPath: false,
  chunkGroups: false,
  entrypoints: false,
  performance: false,
  cachedAssets: false,
  chunkOrigins: false,
};
