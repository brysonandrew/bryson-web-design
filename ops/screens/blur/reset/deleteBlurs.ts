import { CANVAS_SCREENS_PATH } from '@ops/screens/process/constants';
import fg from 'fast-glob';
import { deletePaths } from '../../../delete/deletePaths';
import { BLUR_SUFFIX } from '../config';

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
