/**
 * @docs: https://webpack.js.org/configuration/resolve
 *
 */

import webpack from 'webpack';

import { paths } from '../../paths';

export const configResolve: webpack.Configuration['resolve'] = {
  modules: [paths.serverPath, paths.sourcePath, paths.nodeModulesPath, paths.typesPath],
  extensions: ['.js', '.ts', '.tsx'],
};
