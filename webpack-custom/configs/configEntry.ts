/**
 * @docs: https://webpack.js.org/configuration/entry-context
 *
 */

import path from 'path';

import webpack from 'webpack';

import { paths } from '../../paths';

export const configEntry: webpack.Configuration['entry'] = {
  client: path.resolve(paths.sourcePath, 'client.tsx'),
};
