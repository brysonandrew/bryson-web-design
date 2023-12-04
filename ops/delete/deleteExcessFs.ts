import fg from 'fast-glob';
import { CANVAS_ORIGINAL_SCREENS_PATH } from 'ops/config';
import { deletePaths } from './deletePaths';

(async () => {
  try {
    const pattern = [
      `${CANVAS_ORIGINAL_SCREENS_PATH}/**/*.md`,
      `${CANVAS_ORIGINAL_SCREENS_PATH}/**/*blur*`,
    ];
    const paths = await fg(pattern, {
      onlyFiles: false,
    });
    console.log(paths);
     deletePaths(paths);
  } catch (error) {
    console.log(error);
  }
})();
