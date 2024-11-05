import { PACKAGE_JSON_NAME } from '@ops/config/constants';
import {
  DEP_PREFIX_RX,
  EXCLUDE_PREFIXES,
  INTERNAL_PREFIX,
} from '@ops/exporter/config/constants';
import { TTargets } from '@ops/exporter/config/types';
import { TFilePartsConfig } from '@ops/exporter/utils/file-parts';
import {
  TWuRecord,
  update,
} from '@ops/exporter/write/succession/update';
import glob from 'fast-glob';
import { readFile } from 'fs/promises';

export const processLib = async ({
  lib,
  targets,
  file,
  index,
  filePath,
  prefix = DEP_PREFIX_RX,
}: {
  lib: string;
  targets: TTargets;
  index: number;
  file: string;
} & TFilePartsConfig) => {
  let nextWriteUpdates: TWuRecord = {};

  try {
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
          const u0 = update({
            mode: '0',
            file,
            path: filePath,
            prev: prevLib,
            next: lib,
            nextWriteUpdates,
          });
          nextWriteUpdates = u0.nextWriteUpdates;
          file = u0.nextFile;
          break excludeLoop;
        }
      }

    if (lib.startsWith(INTERNAL_PREFIX)) {
      const [appName, _wsName, subWsName] = lib.split('/');
      let wsName = _wsName;
      lib = [appName, wsName].join('/');

      if (subWsName && !/[A-Z]/.test(subWsName)) {
        const possibleSubWs = [wsName, subWsName].join('-');
        if (
          targets.some(
            (target) => target.name === possibleSubWs,
          )
        ) {
          const prevLib = [lib, subWsName].join('/');
          lib = [appName, possibleSubWs].join('/');
          // const nextFile = file.replace(prevLib, lib);
          // writeUpdates.push([filePath, nextFile]);
          // const fixMessage = `+ [1] Replacement of "${quoteWrap(
          //   prevLib
          // )} with ${quoteWrap(lib)}"`;
          // console.log(bold(fixMessage));
          const u1 = update({
            mode: '1',
            file,
            path: filePath,
            prev: prevLib,
            next: lib,
            nextWriteUpdates,
          });
          nextWriteUpdates = u1.nextWriteUpdates;
          file = u1.nextFile;
          wsName = possibleSubWs;
        }
      } else if (!subWsName) {
        const ws = targets.find(
          (v) =>
            v.name === _wsName &&
            v.subWorkspaces.length > 0,
        );

        if (ws) {
          console.log('WS ', ws);
          const xs = file.match(prefix) ?? [];
          const x = xs[index];
          let imports = x?.split(/[{}]/g) ?? [];
          imports = imports.filter(
            (v) => !(/import /.test(v) || /from /.test(v)),
          );
          imports = imports.map((v) => v.trim());
          const FILES_GLOB = `${ws.dir}/**/*.(ts|tsx)`;
          const wsPaths = await glob([FILES_GLOB]);

          for await (const wsPath of wsPaths) {
            const wsPathFile = await readFile(wsPath, {
              encoding: 'utf-8',
            });

            imports.forEach((v) => {
              const rx = new RegExp(
                `export const ${v}[\\s,\\n]`,
              );

              const matches = wsPathFile.match(rx);

              if (matches && matches?.length > 0) {
                // console.log(matches);

                ws.subWorkspaces.forEach((swsPkgPath) => {
                  const swsId = swsPkgPath.replace(
                    `/${PACKAGE_JSON_NAME}`,
                    '',
                  );
                  // console.log(wsPath, swsId);
                  if (wsPath.includes(swsId)) {
                    const sws = targets.find(
                      (v) => v.workspace === swsId,
                    );

                    if (!sws) return;
                    const prev = [appName, wsName].join(
                      '/',
                    );
                    const next = [appName, sws.name].join(
                      '/',
                    );
                    const u2 = update({
                      mode: '2',
                      file,
                      path: filePath,
                      prev,
                      next,
                      nextWriteUpdates,
                    });
                    nextWriteUpdates = u2.nextWriteUpdates;
                    file = u2.nextFile;
                  }
                });
              }
            });
          }
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
  return nextWriteUpdates;
};
