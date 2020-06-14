/**
 * @docs: https://github.com/websockets/ws
 * @docs: https://github.com/yuanchuan/node-watch
 *
 */

import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

import ws from 'ws';
import watch from 'node-watch';
import express from 'express';

import { env } from '../env';
import { paths } from '../paths';
import { configEntryServer } from '../webpack-custom/configs/configEntryServer';

function startReloadServer() {
  const sslOptions = {
    key: fs.readFileSync(path.resolve(paths.rootPath, 'ssl-local/cert.key')),
    cert: fs.readFileSync(path.resolve(paths.rootPath, 'ssl-local/cert.pem')),
  };

  const app = express();

  app.get('/reload/reload.js', (req, res) => {
    res.type('text/javascript');
    res.send(`
(function refresh() {
  let socketUrl = window.location.origin;
  if (!socketUrl.match(/:[0-9]+/)) {
    socketUrl = socketUrl + ':80';
  }
  socketUrl = socketUrl.replace(/(^http(s?):\\/\\/)(.*:)(.*)/,${`'ws$2://$3${env.HOT_RELOAD_PORT}`}');

  function websocketWaiter() {
    const socket = new WebSocket(socketUrl);

    socket.onmessage = function socketOnMessage(msg) {
      if (msg.data === 'reload') {
        socket.close();
        window.location.reload();
      }
    };

    socket.onclose = function socketOnClose() {
      setTimeout(function reconnectSocketDelayed() {
        websocketWaiter();
      }, 1000);
    };
  }

  window.addEventListener('load', websocketWaiter);
})();
`);
  });

  const server = env.HTTPS_BY_NODE ? https.createServer(sslOptions, app) : http.createServer(app);

  return new ws.Server({ server: server.listen(env.HOT_RELOAD_PORT) });
}

function startFileWatcher({ onFilesChanged }: { onFilesChanged: () => void }) {
  const excludedFilenames = Object.keys(configEntryServer);
  let changedFiles = [];
  let watchDebounceTimeout = null;

  const watchOptions = {
    recursive: false,
    filter: filePath => !excludedFilenames.some(fileName => filePath.indexOf(fileName) !== -1),
  };

  watch(paths.buildPath, watchOptions, function fileChanged(event, filePath) {
    const { base: fileName } = path.parse(filePath);

    changedFiles.push(fileName);

    clearTimeout(watchDebounceTimeout);
    watchDebounceTimeout = setTimeout(() => {
      console.log(`triggered by`, changedFiles);

      changedFiles = [];

      onFilesChanged();
    }, 50);
  });
}

const wss = startReloadServer();

startFileWatcher({
  onFilesChanged() {
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) client.send('reload');
    });
  },
});
