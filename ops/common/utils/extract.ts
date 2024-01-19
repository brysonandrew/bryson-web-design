import { ensureDirSync, readdirSync } from 'fs-extra';
import path from 'path';
import { resolveDir } from './dirs/main';
import { renameSync, rmSync } from 'fs';

export const extract = (folderPath: string) => {
  const files = readdirSync(folderPath);
  files.forEach((filePath: string) => {
    const toPath = filePath.replace(
      `/${path.basename(folderPath)}`,
      '',
    );
    ensureDirSync(path.dirname(toPath));
    renameSync(filePath, toPath);

    if (resolveDir(folderPath)) {
      rmSync(folderPath);
      console.log("Deleted directory at '%s'.", folderPath);
    }
  });
};
