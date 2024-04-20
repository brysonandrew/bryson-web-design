import { join, parse } from 'path';
import { TTarget } from '@ops/exporter/config/types';
import { QUOTE_JSON } from '@ops/config/constants';
import { TStringRecord } from '@brysonandrew/config-types';
import { DEP_PREFIX_RX } from '@ops/exporter/config/constants';
import { resolveDeps } from '@ops/exporter/write/exports/deps/resolveDeps';

type TConfig = {
  paths: string[];
  target: TTarget;
};
export const parsePaths = async ({
  paths,
  target,
}: TConfig) => {
  const { dir, name } = target;
  let types = {};
  let main = {};
  let peerDependencies: TStringRecord = {};
  const indexRows: string[] = [];
  const exportRows: string[] = [];

  for await (const path of paths) {
    const filePath = join(dir, path);

    const {
      root,
      dir: pathDir,
      name: pathName,
    } = parse(path);

    const deps = await resolveDeps({
      filePath,
      targetName: name,
      prefix: DEP_PREFIX_RX,
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
        2
      );
      exportRows.push(
        `${QUOTE_JSON}.${QUOTE_JSON}: ${value}`
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
      `${importKey}: ${QUOTE_JSON}./${path}${QUOTE_JSON}`
    );
  }
  return {
    exportRows,
    indexRows,
    main,
    types,
    peerDependencies,
  };
};

export type TParsePathsValue = Awaited<
  ReturnType<typeof parsePaths>
>;
