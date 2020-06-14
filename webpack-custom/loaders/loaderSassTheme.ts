import path from 'path';

import webpack from 'webpack';

export const loaderSassTheme: webpack.RuleSetLoader = {
  loader: path.resolve(__dirname, '../utils/sassVariablesLoader.ts'),
};
