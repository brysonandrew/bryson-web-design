import glob from 'fast-glob';
import { readFile } from '@ops/common/utils';
import { join } from 'path';
import { TError } from '@brysonandrew/types';
import { kebabToTitle } from '@brysonandrew/utils';

import { writeFile } from 'fs/promises';
import { writeIndex } from './writeIndex';
import { TTargets } from '@brysonandrew/exporter/config/types';
import { parsePaths } from '@ops/exporter/process/parsePaths';

export const process = async (targets: TTargets) => {
  try {
    for (const target of targets) {
      const { name, dir, base } = target;
      const pkgPath = join(dir, base);
      const pkgStr = readFile(pkgPath);
      const { dependencies: _, ...pkg } =
        JSON.parse(pkgStr);

      const version = pkg.version
        .split('.')
        .map((v: string, i: number) =>
          i === 2 ? Number(v) + 1 : v,
        )
        .join('.');

      if (!pkg) {
        console.log('no pgk', dir);
        continue;
      }

      const paths = await glob([`./**/*.(ts|tsx)`], {
        cwd: dir,
      });

      const { exportRows, main, types, indexRows, peerDependencies } =
        await parsePaths({ paths, target });
      const pkgExportsStr = `{${exportRows.join(',')}}`;
      const exports = JSON.parse(pkgExportsStr);

      const pkgWithExportsStr = JSON.stringify(
        {
          ...pkg,
          ...main,
          ...types,
          description: `${kebabToTitle(name)} library`,
          version,
          peerDependencies,
          exports,
        },
        null,
        2,
      );

      writeFile(pkgPath, pkgWithExportsStr);
      writeIndex({ indexRows, dir });
    }
  } catch (error: TError) {
    throw Error(error);
  }
};
