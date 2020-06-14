import { env } from '../../env';

export const hotReloadUrl = `${env.HTTPS_BY_NODE ? 'https' : 'http'}://localhost:${
  env.HOT_RELOAD_PORT
}/reload/reload.js`;
