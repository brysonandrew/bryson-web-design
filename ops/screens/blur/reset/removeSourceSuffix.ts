import { NOOP } from '@constants/functions';
import fg from 'fast-glob';
import fs from 'fs';
import { CANVAS_SCREENS_PATH } from '../../../config';
import { SOURCE_SUFFIX } from '../config';

export const removeSourceSuffix = async () => {
  try {
    const paths = await fg([
      `${CANVAS_SCREENS_PATH}/**/*${SOURCE_SUFFIX}.(webp|png)`,
    ]);
    paths.forEach((path: string) => {
      const nextPath = path.replace(SOURCE_SUFFIX, '');
      fs.rename(path, nextPath, NOOP);
    });
  } catch (error) {
    console.error(error);
  }
};
