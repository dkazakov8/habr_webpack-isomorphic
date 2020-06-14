/**
 * @docs: https://webpack.js.org/configuration/node
 *
 */

import webpack from 'webpack';

export const configNode: webpack.Configuration['node'] = {
  __filename: true,
  __dirname: true,
};
