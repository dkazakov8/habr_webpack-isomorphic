/**
 * @docs: https://webpack.js.org/concepts/plugins
 *
 */

import webpack from 'webpack';

import { pluginDefineServer } from '../plugins/pluginDefineServer';

export const configPluginsServer: webpack.Configuration['plugins'] = [pluginDefineServer];
