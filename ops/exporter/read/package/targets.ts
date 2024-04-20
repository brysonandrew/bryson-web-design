import { join } from 'path';
import { readFile } from 'fs/promises';
import { TTargets } from '@ops/exporter/config/types';
import { TError } from '@brysonandrew/config-types/dom';

export const readPackageTargets = async (
  targets: TTargets
) => {
  const nextTargets: TTargets = [];

  try {
    for await (const target of targets) {
      const { dir, base } = target;

      const pkgPath = join(dir, base);
      const pkgStr = await readFile(pkgPath, {
        encoding: 'utf-8',
      });
      
      const { dependencies: _, exports:__, ...pkg } =
        JSON.parse(pkgStr);

      const version = pkg.version
        .split('.')
        .map((v: string, i: number) =>
          i === 2 ? Number(v) + 1 : v
        )
        .join('.');

      if (!pkg) {
        console.log('no pgk for target', dir);
        continue;
      }

      const nextTarget = {
        ...target,
        pkg,
        pkgPath,
        version,
      };
      nextTargets.push(nextTarget);
    }
  } catch (error: TError) {
    throw Error(error);
  } finally {
    return nextTargets;
  }
};
