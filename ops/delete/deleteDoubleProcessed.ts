import fg from 'fast-glob';
import { deletePaths } from './deletePaths';

(async () => {
  const GLOBS = [
    `assets/screens/canvas/**/?-[320w|meta|output]*`,
  ];
  const paths = await fg(GLOBS);
  console.log(paths);
  deletePaths(paths);
})();
