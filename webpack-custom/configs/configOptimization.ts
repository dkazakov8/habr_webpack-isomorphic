/**
 * @docs: https://webpack.js.org/configuration/optimization
 *
 */
import webpack from 'webpack';

import { env } from '../../env';
import { getTerserConfig } from '../utils/getTerserConfig';

export const configOptimization: webpack.Configuration['optimization'] = {
  minimize: env.MINIMIZE_CLIENT,
  splitChunks: {
    cacheGroups: {
      polyfills: {
        test: /node_modules[\\/]core-js/,
        name: 'polyfills',
        chunks: 'all',
        reuseExistingChunk: true,
        enforce: true,
        priority: 10,
      },
      lodash: {
        test: /node_modules[\\/]lodash/,
        name: 'lodash',
        chunks: 'all',
        reuseExistingChunk: true,
        enforce: true,
      },
      vendor: {
        test: /node_modules/,
        name: 'vendor',
        chunks: 'all',
        reuseExistingChunk: true,
        enforce: true,
        priority: -1,
      },
    },
  },
  runtimeChunk: {
    name: 'runtime',
  },
  minimizer: [getTerserConfig()],
};
