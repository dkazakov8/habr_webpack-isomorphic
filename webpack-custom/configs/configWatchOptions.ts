/**
 * @docs: https://webpack.js.org/configuration/watch
 *
 */

import webpack from 'webpack';

import { env } from '../../env';

export const configWatchOptions: webpack.Configuration['watchOptions'] = {
  aggregateTimeout: env.AGGREGATION_TIMEOUT,
};
