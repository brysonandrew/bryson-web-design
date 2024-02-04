import glob from 'fast-glob';
import { readFile } from '@ops/utils';
import { join, parse } from 'path';
import { TError } from '@brysonandrew/config-types';
import { kebabToTitle } from '@brysonandrew/utils';

import { TTargets } from '@brysonandrew/exporter/config/types';
import { parsePaths } from '@ops/exporter/process/parsePaths';
import { writeIndex } from '@ops/exporter/process/writeIndex';
import { writeFile } from 'fs/promises';
import { QUOTE_JSON } from '@ops/config/constants';

export const process = async (targets: TTargets) => {
  try {
    for (const target of targets) {
      const { name, dir, base, subWorkspaces } = target;
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

      let peerDependencies: Record<string, unknown> = {};
      let indexRows: string[] = [];
      let exports: Record<string, unknown> = {};

      if (subWorkspaces.length > 0) {
        for (const subWorkspacePath of subWorkspaces) {
          const subWorkspacePkgStr = readFile(
            subWorkspacePath,
          );
          const subWorkspacePkg = JSON.parse(
            subWorkspacePkgStr,
          );
          const subWorkspacePkgName = subWorkspacePkg.name;

          indexRows.push(
            `export * from ${QUOTE_JSON}${subWorkspacePkgName}${QUOTE_JSON};`,
          );

          peerDependencies = {
            ...peerDependencies,
            [subWorkspacePkg.name]: '*',
          };
        }
      }

      const FILES_GLOB = `./**/*.(ts|tsx)`;
      const ignore = subWorkspaces.map((value) => {
        const subWorkspace = parse(value);
        const dirParts = subWorkspace.dir.split('/');
        const last = dirParts[dirParts.length - 1];
        const next = join(last, '**/*');
        return next;
      });
      const paths = await glob([FILES_GLOB], {
        cwd: dir,
        ignore,
      });

      const { main, types, ...parsePathsResult } =
        await parsePaths({
          paths,
          target,
        });
      const pkgExportsStr = `{${parsePathsResult.exportRows.join(
        ',',
      )}}`;

      peerDependencies = {
        ...peerDependencies,
        ...parsePathsResult.peerDependencies,
      };
      indexRows = [
        ...indexRows,
        ...parsePathsResult.indexRows,
      ];
      exports = JSON.parse(pkgExportsStr);

      const pkgWithExportsStr = JSON.stringify(
        {
          ...pkg,
          ...main,
          ...types,
          description: `${kebabToTitle(name)} library`,
          version,
          peerDependencies,
          ...(Object.keys(exports).length > 0
            ? { exports }
            : {}),
        },
        null,
        2,
      );

      await writeFile(pkgPath, pkgWithExportsStr);
      writeIndex({ indexRows, dir });
    }
  } catch (error: TError) {
    throw Error(error);
  }
};
