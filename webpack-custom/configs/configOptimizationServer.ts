/**
 * @docs: https://webpack.js.org/configuration/optimization
 *
 */
import webpack from 'webpack';

import { env } from '../../env';
import { getTerserConfig } from '../utils/getTerserConfig';

export const configOptimizationServer: webpack.Configuration['optimization'] = {
  minimize: env.MINIMIZE_SERVER,
  minimizer: [getTerserConfig()],
};
