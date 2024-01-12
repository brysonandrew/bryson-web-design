import fg from 'fast-glob';
import fs from 'fs';
import { resolveFsInfo } from 'ops/utils/resolveFsInfo';
import { CANVAS_SCREENS_PATH } from '../../process/config/constants';
import { SOURCE_SUFFIX } from '../config';

export const createSourceSuffix = async () => {
  try {
    const paths = await fg([
      `${CANVAS_SCREENS_PATH}/**/*.png`,
      `${CANVAS_SCREENS_PATH}/**/*.webp`,
    ]);
    console.log(paths);
    paths.forEach((path: string) => {
      const { noExt, ext } = resolveFsInfo(path);
      const copyPath = `${noExt}${SOURCE_SUFFIX}.${ext}`;
      try {
        fs.copyFileSync(path, copyPath);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
};
