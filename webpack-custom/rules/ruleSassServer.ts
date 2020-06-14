import webpack from 'webpack';

import { paths } from '../../paths';
import { loaderPostcss } from '../loaders/loaderPostcss';
import { loaderCssServer } from '../loaders/loaderCssServer';

export const ruleSassServer: webpack.Rule = {
  test: /\.s?css$/,
  include: [paths.sourcePath],
  use: [loaderCssServer, loaderPostcss],
};
