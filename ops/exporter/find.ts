import glob from 'fast-glob';
import { join } from 'path';

export const find = async (main: string) => {
  try {
    const pattern = join(main, `./**/package.json`);
    const paths = await glob([pattern]);
    return paths;
  } catch (error: any) {
    console.log('find - something went wrong: ', error);
    throw Error(error);
  }
};
