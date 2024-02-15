import { BLUR_SUFFIX, CANVAS_SCREENS_PATH } from '@ops/screens/config/constants';
import fg from 'fast-glob';
import fs from 'fs';

export const removeBlurSuffix = async () => {
  try {
    const paths = await fg(
      [
        `${CANVAS_SCREENS_PATH}/**/*${BLUR_SUFFIX}*.(webp|png)`,
      ],
      { onlyFiles: true },
    );
    paths.forEach((path: string) => {
      const nextPath = path.replace(BLUR_SUFFIX, '');
      fs.rename(path, nextPath, console.error);
    });
  } catch (error) {
    console.error(error);
  }
};
