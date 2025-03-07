import pkg from '@pkg';
import { QUOTE_RX } from '@ops/config/constants';
import {
  DEP_PREFIX_RX,
  EXCLUDE_PREFIXES,
  INTERNAL_PREFIX,
} from '@ops/exporter/config/constants';
import { isRelative } from '@ops/utils/exporter/config';
import { green } from '@ops/console';
import { readFile } from 'fs/promises';
import {
  TTarget,
  TTargets,
  TWriteUpdate,
  TWriteUpdates,
} from '@ops/exporter/config/types';
import { quoteWrap } from '@ops/templates';
import { TStringRecord } from '@brysonandrew/config-types/object';
import { fileParts } from '@ops/exporter/utils/file-parts';

const parentDeps: TStringRecord = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

type TConfig = {
  filePath: string;
  prefix?: RegExp;
  target: TTarget;
  version: string;
  targets: TTargets;
};
export const readAllDeps = async ({
  target,
  version,
  targets,
  filePath,
  prefix,
}: TConfig) => {
  const targetName = target.name;

  let peerDependencies: TStringRecord = {};
  const writeUpdates: TWriteUpdates = [];

  const filePartsResult = await fileParts({
    filePath,
    prefix,
  });
  if (filePartsResult === null)
    return { peerDependencies, writeUpdates };
  const { file, parts } = filePartsResult;
  partsLoop: for await (const part of parts) {
    if (isRelative(part)) {
      continue partsLoop;
    }

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
              INTERNAL_PREFIX
            );
            const nextFile = file.replace(prevLib, lib);
            const entry: TWriteUpdate = [
              filePath,
              nextFile,
            ] as const;
            writeUpdates.push(entry);
            const fixMessage = `Replacement of "${quoteWrap(
              prevLib
            )} with ${quoteWrap(
              lib
            )}" added to write updates`;
            console.log(green(fixMessage));
            break excludeLoop;
          } else {
            continue partsLoop;
          }
        }

      const isInternal = lib.startsWith(INTERNAL_PREFIX);
      if (isInternal) {
        const [appName, _wsName, subWsName] =
          lib.split('/');
        let wsName = _wsName;
        lib = [appName, wsName].join('/');

        if (subWsName && !/[A-Z]/.test(subWsName)) {
          const possibleSubWs = [wsName, subWsName].join(
            '-'
          );
          // console.log(
          //   faint(`
          //   FOUND in ${filePath}:
          //   possibleSubWs: ${possibleSubWs}
          //   lib ${lib}
          //   `)
          // );
          if (
            targets.some(
              (target) => target.name === possibleSubWs
            )
          ) {
            const prevLib = [lib, subWsName].join('/');
            lib = [appName, possibleSubWs].join('/');
            const nextFile = file.replace(prevLib, lib);
            writeUpdates.push([filePath, nextFile]);
            const fixMessage = `Replacement of "${quoteWrap(
              prevLib
            )} with ${quoteWrap(
              lib
            )}" added to write updates`;
            // console.log(green(fixMessage));
            wsName = possibleSubWs;
          }
          // console.log(
          //   bold(`
          // UPDATE ${possibleSubWs}
          // `)
          // );
        }
        if (targetName === wsName) {
          continue partsLoop;
        }
      }

      if (lib.includes('/') && !lib.startsWith('@')) {
        lib = lib.split('/')[0];
      }

      peerDependencies = {
        ...peerDependencies,
        [lib]: isInternal
          ? target.version
          : parentDeps[lib] ?? version,
      };
    }
  }

  return { peerDependencies, writeUpdates };
};
