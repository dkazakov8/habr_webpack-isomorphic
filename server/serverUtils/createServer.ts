import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

import express from 'express';

import { env } from '../../env';
import { paths } from '../../paths';

type ServerType = {
  app?: express.Application;
  useMiddlewares?: (middlewares: Array<(app: express.Application) => any>) => ServerType;
  start?: () => void;
};

const sslOptions = {
  key: fs.readFileSync(path.resolve(paths.rootPath, 'ssl-local/cert.key')),
  cert: fs.readFileSync(path.resolve(paths.rootPath, 'ssl-local/cert.pem')),
};

export function createServer() {
  const server: ServerType = {};
  const port = env.HTTPS_BY_NODE ? 443 : env.EXPRESS_PORT;

  server.app = express();
  server.useMiddlewares = middlewares => {
    middlewares.forEach(fn => fn(server.app));

    return server;
  };

  server.start = function startServer() {
    return new Promise(resolve => {
      const nodeServer = env.HTTPS_BY_NODE
        ? https.createServer(sslOptions, server.app)
        : http.createServer(server.app);

      nodeServer.listen(port, () => {
        console.log(`Server started ${env.HOT_RELOAD ? 'with' : 'without'} hot reload.`);

        resolve(server);
      });
    });
  };

  return server;
}
