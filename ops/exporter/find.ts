import { findDirPaths } from '../common/utils';
import { CACHE_BASE_NAME } from '../common/utils/constants';

export const find = (main: string) => {
  try {
    const targets = {} as any;
    const dirPaths = findDirPaths(main, [
      CACHE_BASE_NAME,
      'node_modules',
    ]);
    for (const [name, dirPath] of Object.entries(dirPaths)) {
      targets[name] = dirPath;
    }
    return dirPaths;
  } catch (error: any) {
    console.log('find - something went wrong: ', error);
    throw Error(error);
  }
};
