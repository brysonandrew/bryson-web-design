import { QUOTE_JSON } from '@ops/config/constants';
import {
  TTarget,
  TTargets,
} from '@ops/exporter/config/types';
import glob from 'fast-glob';
import { parse, join } from 'path';
import { readAllDeps } from '@ops/exporter/read/all/deps';

export const readAllTarget = async (
  target: TTarget,
  targets: TTargets,
) => {
  try {
    const { name, dir } = target;

    target.exportRows = [];
    target.indexRows = [];

    const ignorePaths = target.subWorkspaces.map(
      (value) => {
        const subWorkspace = parse(value);
        const dirParts = subWorkspace.dir.split('/');
        const last = dirParts[dirParts.length - 1];
        const next = join(last, '**/*');
        return next;
      },
    );

    const FILES_GLOB = `./**/*.(ts|tsx)`;
    const paths = await glob([FILES_GLOB], {
      cwd: dir,
      ignore: ignorePaths,
    });

    for await (const path of paths) {
      const filePath = join(dir, path);

      const {
        root,
        dir: pathDir,
        name: pathName,
      } = parse(path);

      const { peerDependencies, writeUpdates } =
        await readAllDeps({
          filePath,
          target,
          version: '*',
          targets,
        });

      target.peerDependencies = {
        ...target.peerDependencies,
        ...peerDependencies,
      };
      target.writeUpdates = [
        ...target.writeUpdates,
        ...writeUpdates,
      ];
      if (path.endsWith('.d.ts')) {
        target.types = { types: path };
        continue;
      }
      if (join(root, pathDir, pathName) === 'index') {
        const indexPath = `./${path}`;
        target.main = {
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
        target.exportRows.push(
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
      const entry = `${QUOTE_JSON}./${importPath}${QUOTE_JSON}`;
      const indexRow = `export * from ${entry};`;
      target.indexRows.push(indexRow);
      const exportRow = `${entry}: ${QUOTE_JSON}./${path}${QUOTE_JSON}`;
      target.exportRows.push(exportRow);
    }
  } catch (error) {
    console.error(error);
  }
  return target;
};
