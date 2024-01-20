import glob from 'fast-glob';
import { readFile } from '@ops/common/utils';
import { writeFile } from 'fs/promises';
import { join, parse } from 'path';
import { PACKAGE_JSON_NAME } from '@ops/common/types';
import { TPath } from '@ops/common/types/entries';
const DEP_PREFIX = '@brysonandrew/';

export const process = async (values: TPath[]) => {
  try {
    for (const target of values) {
      const { name, full } = target;
      const pkgPath = `${full}/${PACKAGE_JSON_NAME}`;
      const pkgStr = readFile(pkgPath);
      const pkg = JSON.parse(pkgStr);
      if (!pkg) {
        console.log('no pgk', full);
        continue;
      }

      const paths = await glob([`./**/*.(ts|tsx)`], {
        cwd: full,
      });

      let types = {};
      let main = {};
      const dependencies: Record<string, string> = {};
      const indexRows = [];
      const exportRows = [];

      for await (const path of paths) {
        const file = readFile(join(full, path));
        const parts = file
          .split(/@brysonandrew\//)
          .slice(1);
        parts.forEach((v) => {
          const endIndex = v.search(/['"/]/);
          if (endIndex > 0) {
            const lib = v.slice(0, endIndex);
            dependencies[`${DEP_PREFIX}${lib}`] = '*';
          }
        });

        const { root, dir, name } = parse(path);

        if (path.includes('.d.ts')) {
          types = { types: path };
          continue;
        }
        if (join(root, dir, name) === 'index') {
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
          exportRows.push(`".": ${value}`);
          continue;
        }
        const args = [
          root,
          dir,
          ...(name === 'index' ? [] : [name]),
        ];
        const key = `"./${join(...args)}"`;
        indexRows.push(`export * from ${key};`);
        exportRows.push(`${key}: "./${path}"`);
      }
      const pkgExportsStr = `{${exportRows.join(',')}}`;
      const exports = JSON.parse(pkgExportsStr);

      const pkgWithExports = {
        ...pkg,
        ...main,
        ...types,
        dependencies,
        exports,
      };

      const pkgWithExportsStr = JSON.stringify(
        pkgWithExports,
        null,
        2,
      );

      writeFile(pkgPath, pkgWithExportsStr);

      const indices = await glob(
        ['./index.ts', './index.tsx'],
        {
          cwd: full,
        },
      );
      let indexStr = '';
      let indexPath = join(full, 'index.ts');

      const nextIndexStr = indexRows.join('\n');
      if (indices.length > 0) {
        indexPath = join(full, indices[0]);
        indexStr = readFile(indexPath);
        const exportStartIndex = indexStr.indexOf(
          'export * from ',
        );
        const exportEndIndex = indexStr.lastIndexOf(';');

        if (exportEndIndex > -1 && exportStartIndex > -1) {
          const indexExportStr = indexStr.slice(
            exportStartIndex,
            exportEndIndex,
          );

          indexStr = indexStr.replace(
            indexExportStr,
            nextIndexStr,
          );
        } else {
          indexStr = [indexStr, nextIndexStr].join('\n');
        }
      }
      writeFile(indexPath, indexStr);
    }
  } catch (error: any) {
    throw Error(error);
  }
};
