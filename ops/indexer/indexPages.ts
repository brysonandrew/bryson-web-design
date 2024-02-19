import glob from 'fast-glob';
import { TError } from '@brysonandrew/config-types';
import { resolvePwd } from '@ops/utils/dirs/pwd';
import { parse, resolve } from 'path';
import { kebabToPascal } from '@brysonandrew/utils';
import { writeFile } from 'fs/promises';

const WORKSHOP_ROOT = 'src/pages/_dev';
const WORKSHOP_GLOB = resolve(WORKSHOP_ROOT, '**');
const WORKSHOP_INDEX = resolve(WORKSHOP_ROOT, 'index.ts');

const DEPTH = 1;

(async () => {
  try {
    const cwd = resolvePwd();
    const paths = await glob([WORKSHOP_GLOB], {
      deep: DEPTH,
      onlyDirectories: true,
      cwd,
    });

    console.log(paths);

    const file = paths.reduce((a: string, path) => {
      const { base } = parse(path);
      const name = kebabToPascal(base);
      a = `${a}export { ${name} } from './${base}';\n`;
      return a;
    }, '');

    await writeFile(WORKSHOP_INDEX, file);
  } catch (error: TError) {
    throw new Error(error);
  }
})();
