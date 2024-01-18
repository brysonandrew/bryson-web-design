import { IMAGES_GLOB } from '@ops/screens/process/constants';
import fg from 'fast-glob';
import fs from 'fs';
import { resolveFsInfo } from '../utils/resolveFsInfo';

(async () => {
  try {
    const paths = await fg([IMAGES_GLOB]);
    paths.forEach((entry) => {
      const { noExt, name } = resolveFsInfo(entry);

      fs.mkdir(noExt, () => {
        const nextPath = `${noExt}/${name}`;
        fs.rename(entry, nextPath, console.log);
      });
    });
  } catch (error) {
    console.error(error);
  }
})();
