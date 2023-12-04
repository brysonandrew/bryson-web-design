import fg from 'fast-glob';
import fs from 'fs';
import { IMAGES_GLOB } from './config';
import { resolveFsInfo } from './utils/resolveFsInfo';

(async () => {
  try {
    const paths = await fg([IMAGES_GLOB]);
    paths.forEach((entry) => {
      const { path, name } = resolveFsInfo(entry);

      fs.mkdir(path, () => {
        const nextPath = `${path}/${name}`;
        fs.rename(entry, nextPath, console.log);
      });
    });
  } catch (error) {
    console.error(error);
  }
})();
