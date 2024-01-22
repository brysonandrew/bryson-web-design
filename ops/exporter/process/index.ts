import glob from 'fast-glob';
import { readFile } from '@ops/common/utils';
import { join, parse } from 'path';
import { TPath } from '@ops/common/types/entries';
import { resolveDeps } from './resolveDeps';
import {
  PACKAGE_JSON_NAME,
  DEP_PREFIX,
  QUOTE_JSON,
} from './constants';
import { writeFile } from 'fs/promises';
import { writeIndex } from './writeIndex';
import { TError } from '@brysonandrew/types';
import { kebabToTitle } from '@brysonandrew/utils';

export const process = async (targets: TPath[]) => {
  try {
    for (const target of targets) {
      const { name, full } = target;
      const pkgPath = `${full}/${PACKAGE_JSON_NAME}`;
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
        console.log('no pgk', full);
        continue;
      }

      const paths = await glob([`./**/*.(ts|tsx)`], {
        cwd: full,
      });

      let types = {};
      let main = {};
      let peerDependencies: Record<string, unknown> = {};
      const indexRows = [];
      const exportRows = [];

      for await (const path of paths) {
        const filePath = join(full, path);
        const file = readFile(filePath);

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

        const { root, dir, name: pathName } = parse(path);

        if (path.endsWith('.d.ts')) {
          types = { types: path };
          continue;
        }
        if (join(root, dir, pathName) === 'index') {
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
          dir,
          ...(pathName === 'index' ? [] : [pathName]),
        ];
        const key = `${QUOTE_JSON}./${join(
          ...args,
        )}${QUOTE_JSON}`;
        indexRows.push(`export * from ${key};`);
        exportRows.push(
          `${key}: ${QUOTE_JSON}./${path}${QUOTE_JSON}`,
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

      writeIndex({ indexRows, full });
    }
  } catch (error: TError) {
    throw Error(error);
  }
};
