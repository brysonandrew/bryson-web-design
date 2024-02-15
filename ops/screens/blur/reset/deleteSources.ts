import { CANVAS_SCREENS_PATH, SOURCE_SUFFIX } from '@ops/screens/config/constants';
import fg from 'fast-glob';

export const deleteSources = async () => {
  try {
    const pattern = [
      `${CANVAS_SCREENS_PATH}/**/*${SOURCE_SUFFIX}.(webp|png)`,
    ];
    const paths = await fg(pattern, {
      onlyFiles: false,
    });
    console.log(paths);
  //  deletePaths(paths);
  } catch (error) {
    console.log(error);
  }
};
