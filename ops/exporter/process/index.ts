import glob from 'fast-glob';
import { readFile } from '@ops/common/utils';
import { join, parse } from 'path';
import { resolveDeps } from './resolveDeps';
import { TError } from '@brysonandrew/types';
import { kebabToTitle } from '@brysonandrew/utils';
import {
  DEP_PREFIX,
  QUOTE_JSON,
} from '../config/constants';
import { writeFile } from 'fs/promises';
import { writeIndex } from './writeIndex';
import { TTargets } from '@brysonandrew/exporter/config/types';

export const process = async (targets: TTargets) => {
  try {
    for (const { name, dir, base } of targets) {
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

      let types = {};
      let main = {};
      let peerDependencies: Record<string, unknown> = {};
      const indexRows: string[] = [];
      const exportRows: string[] = [];

      for await (const path of paths) {
        const filePath = join(dir, path);
        const file = readFile(filePath);

        const {
          root,
          dir: pathDir,
          name: pathName,
        } = parse(path);

        const deps = resolveDeps({
          file,
          name,
          prefix: DEP_PREFIX,
          version: '*',
        });

        peerDependencies = {
          ...peerDependencies,
          ...deps,
        };

        if (path.endsWith('.d.ts')) {
          types = { types: path };
          continue;
        }
        if (join(root, pathDir, pathName) === 'index') {
          const indexPath = `./${path}`;
          main = {
            main: indexPath,
            module: indexPath,
          };
          const value = JSON.stringify(
            {
              require: indexPath,
              import: indexPath,
              default: indexPath,
            },
            null,
            2,
          );
          exportRows.push(
            `${QUOTE_JSON}.${QUOTE_JSON}: ${value}`,
          );
          continue;
        }
        const args = [
          root,
          pathDir,
          ...(pathName === 'index' ? [] : [pathName]),
        ];
        const importPath = join(...args);
        const importKey = `${QUOTE_JSON}./${importPath}${QUOTE_JSON}`;

        indexRows.push(`export * from ${importKey};`);
        exportRows.push(
          `${importKey}: ${QUOTE_JSON}./${path}${QUOTE_JSON}`,
        );
      }
      const pkgExportsStr = `{${exportRows.join(',')}}`;
      const exports = JSON.parse(pkgExportsStr);

      const pkgWithExports = {
        ...pkg,
        ...main,
        ...types,
        description: `${kebabToTitle(name)} library`,
        version,
        peerDependencies,
        exports,
      };

      const pkgWithExportsStr = JSON.stringify(
        pkgWithExports,
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
