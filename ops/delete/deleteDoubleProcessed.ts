import { DIRS_GLOB } from '@ops/screens/process/config/constants';
import fg from 'fast-glob';
import { deletePaths } from './deletePaths';

(async () => {
  const GLOBS = [
    `${DIRS_GLOB}/canvas/**/?-[320w|meta|output]*`,
  ];
  const paths = await fg(GLOBS);
  console.log(paths);
  deletePaths(paths);
})();
