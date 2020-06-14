/**
 * @docs: https://webpack.js.org/configuration/mode
 *
 */

import webpack from 'webpack';

import { env } from '../../env';

export const configMode: webpack.Configuration['mode'] = env.NODE_ENV;
