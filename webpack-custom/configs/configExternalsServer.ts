/**
 * @docs: https://webpack.js.org/configuration/externals
 *
 */

import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

export const configExternalsServer: webpack.Configuration['externals'] = [nodeExternals()];
