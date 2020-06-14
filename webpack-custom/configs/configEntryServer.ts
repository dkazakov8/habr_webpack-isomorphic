/**
 * @docs: https://webpack.js.org/configuration/entry-context
 *
 */

import path from 'path';

import webpack from 'webpack';

import { paths } from '../../paths';

export const configEntryServer: webpack.Configuration['entry'] = {
  server: path.resolve(paths.serverPath, 'server.ts'),
};
