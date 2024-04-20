import { parsePaths } from '@ops/exporter/write/exports/parsePaths';
import { writeFile } from 'fs/promises';
import {
  TIndexRows,
  TTarget,
} from '@ops/exporter/config/types';
import { kebabToTitle } from '@brysonandrew/utils-format';
import glob from 'fast-glob';
import { parse, join } from 'path';

export const writeExportsTarget = async (
  target: TTarget
) => {
  let indexRows: TIndexRows = [];
  try {
    const { name, dir, pkgPath, version, pkg } = target;

    const ignorePaths = target.subWorkspaces.map(
      (value) => {
        const subWorkspace = parse(value);
        const dirParts = subWorkspace.dir.split('/');
        const last = dirParts[dirParts.length - 1];
        const next = join(last, '**/*');
        return next;
      }
    );

    const FILES_GLOB = `./**/*.(ts|tsx)`;
    const paths = await glob([FILES_GLOB], {
      cwd: dir,
      ignore: ignorePaths,
    });

    const parsePathsValue = await parsePaths({
      paths,
      target,
    });

    const { main, types, ...parsePathsValueRest } =
      parsePathsValue;

    indexRows = [
      ...indexRows,
      ...parsePathsValueRest.indexRows,
    ];

    const peerDependencies = {
      ...target.peerDependencies,
      ...parsePathsValueRest.peerDependencies,
    };

    const pkgExportsStr = `{${parsePathsValueRest.exportRows.join(
      ','
    )}}`;

    const exportsRecord = JSON.parse(pkgExportsStr);
    const exportsKeys = Object.keys(exportsRecord);
    const isExports = exportsKeys.length > 0;

    const pkgWithExportsRecord = {
      ...pkg,
      ...main,
      ...types,
      description: `${kebabToTitle(name)} library`,
      version,
      peerDependencies,
      ...(isExports ? { exports: exportsRecord } : {}),
    };

    const pkgWithExportsStr = JSON.stringify(
      pkgWithExportsRecord,
      null,
      2
    );

    writeFile(pkgPath, pkgWithExportsStr);
  } catch (error) {
    console.error(error);
  } finally {
    return { indexRows };
  }
};
