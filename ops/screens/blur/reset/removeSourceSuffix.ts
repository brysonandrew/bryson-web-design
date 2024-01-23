import { NOOP } from '@brysonandrew/utils';
import { SOURCE_SUFFIX } from '@brysonandrew/screens/blur/config';
import { CANVAS_SCREENS_PATH } from '@ops/screens/process/constants';
import fg from 'fast-glob';
import fs from 'fs';

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
  }
};
