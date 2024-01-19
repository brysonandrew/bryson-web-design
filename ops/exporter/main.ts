import glob from 'fast-glob';
import { find } from './find';
import { init } from './init';
import { clean } from './clean';
import { cache } from './cache';
import { foundation } from './foundation';
import { build } from './build';
import { readFile } from '@ops/common/utils';
import { stat, readdir } from 'fs/promises';
import { join, parse } from 'path';
import { PACKAGE_JSON_NAME } from '@ops/common/types';
import {
  exportsPrefixStr,
  exportsPrefixRx,
  removeCharsRx,
} from './constants';

(async () => {
  try {
    const workspacePath = init();
    const targets = find(workspacePath);
    console.log(targets);
    // clean(targets);
    cache(targets);
    for (const target of Object.values(targets)) {
      const { name, full } = target;
      const pkgPath = `${full}/${PACKAGE_JSON_NAME}`;
      const pkgStr = readFile(pkgPath);
      const pkg = JSON.parse(pkgStr);
      if (!pkg) {
        console.log('no pgk', full);
        continue;
      }
      // const f =
      //   readFile(`${full}/index.ts`) ??
      //   readFile(`${full}/index.tsx`);

      // if (!f) {
      //   console.log('no file', full);
      //   continue;
      // }

      // const startIndex = f.indexOf(exportsPrefixStr);
      // const endIndex = f.lastIndexOf('\n');
      // const content = f.slice(startIndex, endIndex);
      // const f1 = content.replace(removeCharsRx, '');
      // const pathsOnly = f1.replace(exportsPrefixRx, '');

      // const dirEntries = await readdir(full, {
      //   withFileTypes: true,
      // });

      const paths = await glob([`./**/*.(ts|tsx)`], {
        cwd: full,
        ignore: ['index.ts'],
      });

      const rows = [];
      for await (const row of paths) {
        const { root, dir, name } = parse(row);
        const key = join(root, dir, name);
        rows.push(`"./${key}": "./${row}"`);
      }
      const exportsStr = `{${rows.join(',')}}`;
      console.log(exportsStr);
      const exports = JSON.parse(exportsStr);
      console.log(exports);

      const pkgWithExports = {
        ...pkg,
        exports: { ...pkg.exports, ...exports },
      };

      console.log(pkgWithExports);

      const pkgWithExportsStr =
        JSON.stringify(pkgWithExports);
      console.log(pkgWithExportsStr);

      // writeFile(pkgPath, pkgWithExportsStr, console.log);
    }
  } catch (error) {
    console.log('Exporter - something went wrong: ', error);
  }
})();
