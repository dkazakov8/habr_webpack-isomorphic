import { errorsNames } from 'const';
import { createError } from 'utils';

export function handleMissingRoutes(app) {
  app.use('*', (req, res) => {
    const error = createError(
      errorsNames.NOT_FOUND,
      `Route ${req.method} ${req.originalUrl} was not found`
    );

    console.error(error);

    res.status(404).send({
      errorName: error.name,
      errorMessage: error.message,
    });
  });
}
