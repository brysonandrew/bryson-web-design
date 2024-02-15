import { deletePaths } from '@ops/delete/deletePaths';
import {
  BLUR_SUFFIX,
  CANVAS_SCREENS_PATH,
} from '@ops/screens/config/constants';
import fg from 'fast-glob';

export const deleteBlurs = async () => {
  try {
    const pattern = [
      `${CANVAS_SCREENS_PATH}/**/*${BLUR_SUFFIX}.(webp|png)`,
    ];
    const paths = await fg(pattern, {
      onlyFiles: false,
    });
    deletePaths(paths);
  } catch (error) {
    console.log(error);
  }
};
