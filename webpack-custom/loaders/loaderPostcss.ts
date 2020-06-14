/**
 * @docs: https://github.com/postcss/postcss-loader
 *
 */

import webpack from 'webpack';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssAutomath from 'postcss-automath';
import postcssAutoprefixer from 'autoprefixer';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssAdvancedVariables from 'postcss-advanced-variables';
import postcssSassColorFunctions from 'postcss-sass-color-functions';
import postcssStripInlineComments from 'postcss-strip-inline-comments';

import { env } from '../../env';
import { paths } from '../../paths';

export const loaderPostcss: webpack.RuleSetLoader = {
  loader: 'postcss-loader',
  options: {
    parser: 'postcss-scss',
    plugins: () =>
      [
        // https://github.com/postcss/postcss-import
        postcssImport({ root: paths.sourcePath, path: [paths.stylesPath] }),

        // https://github.com/mummybot/postcss-strip-inline-comments
        postcssStripInlineComments(),

        // https://github.com/jonathantneal/postcss-advanced-variables
        postcssAdvancedVariables(),

        // https://github.com/MadLittleMods/postcss-css-variables
        postcssCustomProperties(),

        // https://github.com/adam-h/postcss-sass-color-functions
        postcssSassColorFunctions(),

        // https://github.com/postcss/postcss-nested
        postcssNested(),

        // https://github.com/shaoyudong/postcss-automath
        postcssAutomath(),

        // https://github.com/postcss/autoprefixer
        env.POLYFILLING ? postcssAutoprefixer() : null,
      ].filter(Boolean),
  },
};
