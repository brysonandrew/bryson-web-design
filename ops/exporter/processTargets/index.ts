import glob from 'fast-glob';
import { join } from 'path';
import { TError } from '@brysonandrew/config-types';
import { parsePaths } from '@ops/exporter/processTargets/parsePaths';
import { writeIndex } from '@ops/exporter/processTargets/writeIndex';
import { readFile, writeFile } from 'fs/promises';
import { processParentTarget } from '@ops/exporter/processTargets/processParentTarget';
import { TTargets } from '@ops/exporter/config/types';
import { kebabToTitle } from '@brysonandrew/utils-format';

export const processTargets = async (targets: TTargets) => {
  try {
    for await (const target of targets) {
      const { name, dir, base, subWorkspaces } = target;
   

      const pkgPath = join(dir, base);
      const pkgStr = await readFile(pkgPath, {
        encoding: 'utf-8',
      });
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

      let ignore: string[] = [];

      if (subWorkspaces.length > 0) {
        const parentResult = await processParentTarget(
          subWorkspaces,
        );

        indexRows = [
          ...indexRows,
          ...parentResult.indexRows,
        ];

        peerDependencies = {
          ...peerDependencies,
          ...parentResult.peerDependencies,
        };

        ignore = parentResult.ignore;
      }

      const FILES_GLOB = `./**/*.(ts|tsx)`;
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
