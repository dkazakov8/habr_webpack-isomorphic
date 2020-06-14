type Devtool =
  | 'eval'
  | 'source-map'
  | 'eval-source-map'
  | 'cheap-source-map'
  | 'inline-source-map'
  | 'hidden-source-map'
  | 'nosources-source-map'
  | 'cheap-eval-source-map'
  | 'cheap-module-source-map'
  | 'inline-cheap-source-map'
  | 'cheap-module-eval-source-map'
  | 'inline-cheap-module-source-map'
  | boolean;

class Env {
  constructor(params: Record<string, any>) {
    Object.entries(params).forEach(([envKey, envValue]) => {
      switch (typeof this[envKey]) {
        case 'boolean':
          this[envKey] = envValue === true || envValue === 'true';
          break;
        case 'string':
          this[envKey] = (envValue || '').replace(/"/g, '').trim();
          break;
        case 'number':
          this[envKey] = Number(envValue || 0);
          break;
        default:
          break;
      }
    });
  }

  HOT_RELOAD = false;
  HOT_RELOAD_PORT = 0;

  DEV_TOOL: Devtool = 'cheap-module-eval-source-map';
  DEV_TOOL_SERVER: Devtool = 'cheap-module-eval-source-map';

  POLYFILLING = false;
  DROP_CONSOLE = false;
  FILENAME_HASH = false;
  CIRCULAR_CHECK = false;
  MINIMIZE_CLIENT = false;
  MINIMIZE_SERVER = false;
  AGGREGATION_TIMEOUT = 0;
  START_SERVER_AFTER_BUILD = false;

  NODE_ENV: `development` | `production` = `development`;
  NODE_PATH = '';
  EXPRESS_PORT = 0;
  HTTPS_BY_NODE = false;
}

// eslint-disable-next-line no-process-env
export const env = new Env(process.env);
