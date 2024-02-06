import { parsePkgPaths } from '@ops/exporter/findTargets/parsePkgPaths';
import { resolvePwd } from '@ops/utils/dirs/pwd';
import glob from 'fast-glob';
import { join } from 'path';

export const findTargets = async (main: string) => {
  try {
    const pattern = join(main, `./**/package.json`);
    const paths = await glob([pattern], {
      cwd: resolvePwd(),
    });
    const curr = parsePkgPaths(paths);
    return curr;
  } catch (error: any) {
    console.log('find - something went wrong: ', error);
    throw Error(error);
  }
};
