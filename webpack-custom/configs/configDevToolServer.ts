/**
 * @docs: https://webpack.js.org/configuration/devtool
 *
 */
import webpack from 'webpack';

import { env } from '../../env';

export const configDevToolServer: webpack.Configuration['devtool'] = env.DEV_TOOL_SERVER || false;
