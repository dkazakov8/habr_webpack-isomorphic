import path from 'path';

const rootPath = __dirname;

export const paths = {
  rootPath,
  buildPath: path.resolve(rootPath, 'build'),
  typesPath: path.resolve(rootPath, 'types-custom'),
  serverPath: path.resolve(rootPath, 'server'),
  sourcePath: path.resolve(rootPath, 'src'),
  stylesPath: path.resolve(rootPath, 'src/styles'),
  templatesPath: path.resolve(rootPath, 'templates'),
  nodeModulesPath: path.resolve(rootPath, 'node_modules'),
};
