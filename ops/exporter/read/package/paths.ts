import { TError } from '@brysonandrew/config-types/dom';
import { resolvePwd } from '@ops/utils/dirs/pwd';
import glob from 'fast-glob';
import { join } from 'path';

export const readPackagePaths = async (main: string) => {
  try {
    const cwd = resolvePwd();
    const pattern = join(main, `./**/package.json`);
    const paths = await glob([pattern], {
      cwd,
    });
    return paths;
  } catch (error: TError) {
    console.log(error);
    throw new Error(error);
  }
};
