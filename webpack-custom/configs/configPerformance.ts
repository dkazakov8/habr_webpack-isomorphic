/**
 * @docs: https://webpack.js.org/configuration/performance
 *
 */

import webpack from 'webpack';

export const configPerformance: webpack.Configuration['performance'] = {
  hints: false,
};
