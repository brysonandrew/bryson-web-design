import {
  PACKAGE_JSON_NAME,
  QUOTE_RX,
} from '@ops/config/constants';
import { INTERNAL_PREFIX } from '@ops/exporter/config/constants';
import { isRelative } from '@ops/utils/exporter/config';
import { readFile } from 'fs/promises';
import {
  TTargets,
  TWriteUpdates,
} from '@ops/exporter/config/types';
import { quoteWrap } from '@ops/templates';
import glob from 'fast-glob';
import { bold, green } from '@ops/console';

type TConfig = {
  filePath: string;
  prefix: RegExp;
  targets: TTargets;
};
export const replace = async ({
  filePath,
  prefix,
  targets,
}: TConfig) => {
  const file = await readFile(filePath, {
    encoding: 'utf-8',
  });

  const writeUpdates: TWriteUpdates = [];

  const parts = file.split(prefix).slice(1);
  let index = 0;
  partsLoop: for await (const part of parts) {
    if (isRelative(part)) {
      index++;
      continue partsLoop;
    }

    const endRx = QUOTE_RX;
    const endIndex = part.search(endRx);

    if (endIndex > -1) {
      let lib = part.slice(0, endIndex);

      // excludeLoop: for await (const excludePrefix of EXCLUDE_PREFIXES)
      //   if (lib.startsWith(excludePrefix)) {
      //     const errorMessage = `Invalid absolute import found: ${lib}`;
      //     console.error(errorMessage);
      //     if (excludePrefix === 'lib/') {
      //       const prevLib = lib;
      //       lib = prevLib.replace(
      //         excludePrefix,
      //         INTERNAL_PREFIX
      //       );
      //       const nextFile = file.replace(prevLib, lib);
      //       const entry: TWriteUpdate = [
      //         filePath,
      //         nextFile,
      //       ] as const;
      //       writeUpdates.push(entry);
      //       const fixMessage = `Replacement of "${quoteWrap(
      //         prevLib
      //       )} with ${quoteWrap(
      //         lib
      //       )}" added to write updates`;
      //       console.log(green(fixMessage));
      //       break excludeLoop;
      //     } else {
      //       continue partsLoop;
      //     }
      //   }

      if (lib.startsWith(INTERNAL_PREFIX)) {
        const [appName, _wsName, subWsName] =
          lib.split('/');
        let wsName = _wsName;
        lib = [appName, wsName].join('/');

        if (subWsName && !/[A-Z]/.test(subWsName)) {
          const possibleSubWs = [wsName, subWsName].join(
            '-'
          );
          if (
            targets.some(
              (target) => target.name === possibleSubWs
            )
          ) {
            console.log(
              bold(`
            UPDATE ${possibleSubWs}
            `)
            );
            const prevLib = [lib, subWsName].join('/');
            lib = [appName, possibleSubWs].join('/');
            const nextFile = file.replace(prevLib, lib);
            writeUpdates.push([filePath, nextFile]);
            const fixMessage = `Replacement of "${quoteWrap(
              prevLib
            )} with ${quoteWrap(
              lib
            )}" added to write updates`;
            console.log(green(fixMessage));
            wsName = possibleSubWs;
          }
        } else if (!subWsName) {
          const ws = targets.find(
            (v) =>
              v.name === _wsName &&
              v.subWorkspaces.length > 0
          );
          if (ws) {
            const xs = file.match(prefix) ?? [];
            const x = xs[index];
            let imports = x.split(/[{}]/g) ?? [];
            imports = imports.filter(
              (v) => !(/import /.test(v) || /from /.test(v))
            );
            imports = imports.map((v) => v.trim());
            const FILES_GLOB = `${ws.dir}/**/*.(ts|tsx)`;
            const paths = await glob([FILES_GLOB]);

            for await (const p of paths) {
              const x = await readFile(p, {
                encoding: 'utf-8',
              });

              imports.forEach((v) => {
                const rx = new RegExp(`export .* ${v}`);
                const matches = x.match(rx);
                if (matches && matches?.length > 0) {
                  ws.subWorkspaces.forEach((swsPkgPath) => {
                    const swsId = swsPkgPath.replace(
                      `/${PACKAGE_JSON_NAME}`,
                      ''
                    );
                    if (p.includes(swsId)) {
                      const sws = targets.find(
                        (v) => v.workspace === swsId
                      );

                      if (!sws) return;
                      const prev = [appName, wsName].join(
                        '/'
                      );
                      const next = [appName, sws.name].join(
                        '/'
                      );

                      const nextFile = file.replace(
                        prev,
                        next
                      );

                      const fixMessage = `Replacement of "${quoteWrap(
                        prev
                      )} with ${quoteWrap(
                        next
                      )}" added to write updates`;
                      console.log(green(fixMessage));
                      writeUpdates.push([p, nextFile]);
                    }
                  });
                }
              });
            }
          }
        }
      }
    }
  }

  return writeUpdates;
};
