import { CANVAS_SCREENS_PATH } from '@ops/screens/process/constants';
import fg from 'fast-glob';
import { SOURCE_SUFFIX } from '../config';

export const deleteSources = async () => {
  try {
    const pattern = [
      `${CANVAS_SCREENS_PATH}/**/*${SOURCE_SUFFIX}.(webp|png)`,
    ];
    const paths = await fg(pattern, {
      onlyFiles: false,
    });
    console.log(paths)
  //  deletePaths(paths);
  } catch (error) {
    console.log(error);
  }
};
