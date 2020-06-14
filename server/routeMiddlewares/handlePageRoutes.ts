import fs from 'fs';
import path from 'path';

import { injectAppMarkup, injectBrowserReload } from 'serverUtils';

import { paths } from '../../paths';

const template = fs.readFileSync(path.resolve(paths.buildPath, 'template.html'), 'utf-8');

export function handlePageRoutes(app) {
  app.get('*', (req, res) => {
    Promise.resolve()
      .then(() => injectAppMarkup(template))
      .then(modTemplate => injectBrowserReload(modTemplate))
      .then(modTemplate => res.send(modTemplate))
      .catch(error => {
        console.error(error);

        res.status(500);
        res.send('Unpredictable error');
      });
  });
}
