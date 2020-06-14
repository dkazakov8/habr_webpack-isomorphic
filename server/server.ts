import { createServer } from 'serverUtils';
import { handleFileRoutes } from 'routeMiddlewares/handleFileRoutes';
import { handlePageRoutes } from 'routeMiddlewares/handlePageRoutes';
import { handleMissingRoutes } from 'routeMiddlewares/handleMissingRoutes';

Promise.resolve()
  .then(() => createServer())
  .then(server => server.useMiddlewares([handleFileRoutes, handlePageRoutes, handleMissingRoutes]))
  .then(server => server.start())
  .catch(error => {
    console.error(error);

    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
