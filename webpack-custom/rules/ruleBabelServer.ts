import webpack from 'webpack';

import { paths } from '../../paths';
import { loaderBabelServer } from '../loaders/loaderBabelServer';

export const ruleBabelServer: webpack.Rule = {
  test: /\.(js|tsx?)$/,
  use: [loaderBabelServer],
  exclude: [paths.nodeModulesPath],
};
