import fs from 'fs';
import path from 'path';

export function deleteRecursive(src) {
  if (!fs.existsSync(src)) return Promise.resolve();

  return Promise.resolve()
    .then(() => fs.promises.readdir(src))
    .then(filesNames => filesNames.map(fileName => path.join(src, fileName)))
    .then(filesPaths =>
      Promise.all(
        filesPaths.map(filePath =>
          fs.statSync(filePath).isDirectory()
            ? deleteRecursive(filePath)
            : fs.promises.unlink(filePath)
        )
      )
    )
    .then(() => fs.promises.rmdir(src));
}
