/**
 * @docs: https://github.com/trivago/parallel-webpack
 *
 */

import path from 'path';
import { exec } from 'child_process';

import { run } from 'parallel-webpack';

import { env } from '../env';
import { paths } from '../paths';
import { clearFolder } from '../server/serverUtils/clearFolder';

function afterFirstBuild() {
  /**
   * Start server & proxy it's stdout/stderr to current console
   *
   */

  if (!env.START_SERVER_AFTER_BUILD) return false;

  const serverProcess = exec('better-npm-run -s start');

  serverProcess.stdout.on('data', msg => console.log('[server]', msg.trim()));
  serverProcess.stderr.on('data', msg => console.error('[server]', msg.trim()));

  /**
   * Start watch server & proxy it's stdout/stderr to current console
   *
   */

  if (!env.HOT_RELOAD) return false;

  const reloadServerProcess = exec('better-npm-run -s reload-browser');

  reloadServerProcess.stdout.on('data', msg => console.log('[reload-browser]', msg.trim()));
  reloadServerProcess.stderr.on('data', msg => console.error('[reload-browser]', msg.trim()));
}

const parallelOptions = {
  stats: true,
  watch: env.HOT_RELOAD,
  colors: true,
  maxRetries: 1,
  maxConcurrentWorkers: 2,
};

Promise.resolve()
  .then(() => clearFolder(paths.buildPath))
  .then(() =>
    run(path.resolve(__dirname, 'webpackParallel.config.ts'), parallelOptions, afterFirstBuild)
  )
  .catch(console.error);
