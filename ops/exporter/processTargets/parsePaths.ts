import {
  DEP_PREFIX,
} from '../config/constants';
import { join, parse } from 'path';
import { resolveDeps } from './resolveDeps';
import { readFile } from '@ops/utils';
import { TTarget } from '@ops/exporter/config/types';
import { QUOTE_JSON } from '@ops/config/constants';

type TConfig = { paths: string[]; target: TTarget };
export const parsePaths = async ({
  paths,
  target,
}: TConfig) => {
  const { dir, name } = target;
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
  return { exportRows, indexRows, main, types, peerDependencies };
};
