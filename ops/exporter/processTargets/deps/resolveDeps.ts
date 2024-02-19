import pkg from '@pkg';
import { QUOTE_RX } from '@ops/config/constants';
import { INTERNAL_PREFIX } from '@ops/exporter/config/constants';
import { isRelative } from '@ops/utils/exporter/config';
import { TStringRecord } from '@brysonandrew/config-types';
import { EXCLUDE_PREFIXES } from '@ops/exporter/processTargets/deps/config/constants';
import { green } from '@ops/console';
import { readFile, writeFile } from 'fs/promises';

const parentDeps: TStringRecord = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

type TConfig = {
  filePath: string;
  prefix: RegExp;
  targetName: string;
  version: string;
};
export const resolveDeps = async ({
  filePath,
  prefix,
  targetName,
  version,
}: TConfig) => {
  const file = await readFile(filePath, {
    encoding: 'utf-8',
  });

  let peerDependencies: Record<string, unknown> = {};
  const parts = file.split(prefix).slice(1);

  partsLoop: for await (const part of parts) {
    if (isRelative(part)) continue partsLoop;

    const endRx = QUOTE_RX;
    const endIndex = part.search(endRx);

    if (endIndex > -1) {
      let lib = part.slice(0, endIndex);

      excludeLoop: for await (const excludePrefix of EXCLUDE_PREFIXES)
        if (lib.startsWith(excludePrefix)) {
          const errorMessage = `Invalid absolute import found: ${lib}`;
          console.error(errorMessage);
          if (excludePrefix === 'lib/') {
            const prevLib = lib;
            lib = prevLib.replace(
              excludePrefix,
              INTERNAL_PREFIX,
            );
            const nextFile = file.replace(prevLib, lib);
            await writeFile(filePath, nextFile);
            const fixMessage = `Replaced ${prevLib} with ${lib}`;
            console.log(green(fixMessage));
            break excludeLoop;
          } else {
            continue partsLoop;
          }
        }

      if (lib.startsWith(INTERNAL_PREFIX)) {
        const [appName, libName] = lib.split('/');

        if (targetName === libName) continue partsLoop;
        lib = [appName, libName].join('/');
      }
  
      peerDependencies = {
        ...peerDependencies,
        [lib]: parentDeps[lib] ?? version
      };
      // if (targetName === 'notifications') {
      //   console.log( peerDependencies);
      // }
    }
  }
  // if (targetName === 'notifications') {
  //   console.log({
  //     filePath,
  //     prefix,
  //     targetName,
  //     version,
  //   });
  //   console.log(file);

  //   console.log(peerDependencies);
  // }
  return peerDependencies;
};
