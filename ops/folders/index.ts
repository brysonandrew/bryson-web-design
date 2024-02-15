import { IMAGES_GLOB } from '@ops/screens/config/constants';
import { resolveFsInfo } from '@ops/utils/resolveFsInfo';
import fg from 'fast-glob';
import fs from 'fs';

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
