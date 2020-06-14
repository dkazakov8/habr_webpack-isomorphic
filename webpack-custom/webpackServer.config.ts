import { configMode } from './configs/configMode';
import { configNode } from './configs/configNode';
import { configStats } from './configs/configStats';
import { configResolve } from './configs/configResolve';
import { configPerformance } from './configs/configPerformance';
import { configEntryServer } from './configs/configEntryServer';
import { configOutputServer } from './configs/configOutputServer';
import { configModuleServer } from './configs/configModuleServer';
import { configWatchOptions } from './configs/configWatchOptions';
import { configDevToolServer } from './configs/configDevToolServer';
import { configPluginsServer } from './configs/configPluginsServer';
import { configExternalsServer } from './configs/configExternalsServer';
import { configOptimizationServer } from './configs/configOptimizationServer';

export default {
  node: configNode,
  mode: configMode,
  entry: configEntryServer,
  stats: configStats,
  module: configModuleServer,
  output: configOutputServer,
  target: 'node',
  devtool: configDevToolServer,
  plugins: configPluginsServer,
  resolve: configResolve,
  externals: configExternalsServer,
  performance: configPerformance,
  optimization: configOptimizationServer,
  watchOptions: configWatchOptions,
};
