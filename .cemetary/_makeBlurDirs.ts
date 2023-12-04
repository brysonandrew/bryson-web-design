import { NOOP } from '@constants/functions';
import fg from 'fast-glob';
import fs from 'fs';
import { CANVAS_ORIGINAL_SCREENS_PATH } from '../ops/config';

(async () => {
  try {
    const paths = await fg(
      [`${CANVAS_ORIGINAL_SCREENS_PATH}/**`],
      { onlyDirectories: true },
    );
    paths.forEach((path: string) => {
      fs.mkdir(`${path}/blur`, NOOP);
    });
  } catch (error) {
    console.error(error);
  }
})();
