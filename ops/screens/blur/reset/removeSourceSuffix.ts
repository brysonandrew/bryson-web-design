// import { NOOP } from '@brysonandrew/utils';
import {
  CANVAS_SCREENS_PATH,
  SOURCE_SUFFIX,
} from '@ops/screens/config/constants';
import fg from 'fast-glob';
import fs from 'fs';

export const removeSourceSuffix = async () => {
  try {
    const paths = await fg([
      `${CANVAS_SCREENS_PATH}/**/*${SOURCE_SUFFIX}.(webp|png)`,
    ]);
    paths.forEach((path: string) => {
      const nextPath = path.replace(SOURCE_SUFFIX, '');
      fs.rename(path, nextPath, () => null);
    });
  } catch (error) {
    console.log(error);
  }
};
