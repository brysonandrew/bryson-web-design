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
  } catch (error: any) {
    console.log('find - something went wrong: ', error);
    throw Error(error);
  }
};
