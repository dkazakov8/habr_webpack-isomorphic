/**
 * @docs: https://webpack.js.org/configuration/module
 *
 */

import webpack from 'webpack';

import { ruleSass } from '../rules/ruleSass';
import { ruleBabel } from '../rules/ruleBabel';
import { ruleFiles } from '../rules/ruleFiles';

export const configModule: webpack.Configuration['module'] = {
  rules: [ruleBabel, ruleFiles, ruleSass],
};
