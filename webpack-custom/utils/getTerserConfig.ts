import TerserPlugin from 'terser-webpack-plugin';

import { env } from '../../env';

export function getTerserConfig() {
  return new TerserPlugin({
    sourceMap: true,
    parallel: true,
    terserOptions: {
      warnings: false,
      keep_fnames: true,
      compress: {
        drop_console: env.DROP_CONSOLE,
      },
      output: {
        beautify: false,
        comments: /^!\s@env/,
      },
    },
  });
}
