import serveStatic from 'serve-static';

export function handleFileRoutes(app) {
  app.use(serveStatic('build'));

  // Send 404 for all not found files
  app.get('*', (req, res, next) =>
    req.originalUrl.indexOf('.') !== -1 ? res.sendStatus(404) : next()
  );
}
