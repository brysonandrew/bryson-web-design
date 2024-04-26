import glob from 'fast-glob';
import { TError } from '@brysonandrew/config-types';
import { resolvePwd } from '@ops/utils/dirs/pwd';
import { TTargets } from '@ops/exporter/config/types';
import { faint } from '@ops/lib';
import {
  TWuRecord,
  update,
} from '@ops/exporter/write/succession/update';
import { INTERNAL_NAME } from '@ops/exporter/config/constants';
import { readFile, writeFile } from 'fs/promises';
import { PACKAGE_JSON_NAME } from '@ops/config/constants';
import { resolvePossibleWs } from '@ops/exporter/write/succession/resolve-possible-ws';

export const succession = async (targets: TTargets) => {
  try {
    const cwd = resolvePwd();
    const GLOBS = ['lib/**/*.(ts|tsx)'];
    const paths = await glob(GLOBS, { cwd });
    let updates: TWuRecord = {};
    updates = updates;
    const WS_UNION_RX_KEY = targets
      .filter(
        ({ subWorkspaces }) => subWorkspaces.length > 0
      )
      .map(({ name }) => name)
      .join('|');

    const INFINITE_SPACE_RX_KEY = `\\s*`;

    const IMPORT_RX_KEY = `import\\s`;
    const WITH_IMPORTS_RX_KEY = `.*?`;
    const FROM_RX_KEY = `\\}\\sfrom\\s`;
    const QUOTE_RX_KEY = `["']`;
    const INTERNAL_LIB_RX_KEY = `${INTERNAL_NAME}\\/(${WS_UNION_RX_KEY})`;
    const PATH_RX_KEY = `[\\/a-z-]*`;
    const END_QUOTE_RX_KEY = `["'];$\\n`;

    const END_KEY = `;`;
    const INTERNAL_DEPENDENCY_PREFIX_KEY = `${[
      //   INFINITE_SPACE_RX_KEY,
      IMPORT_RX_KEY,
      WITH_IMPORTS_RX_KEY,
      `(${[
        FROM_RX_KEY,
        QUOTE_RX_KEY,
        INTERNAL_NAME,
        INTERNAL_LIB_RX_KEY,
        PATH_RX_KEY,
        END_QUOTE_RX_KEY,
      ].join('')}|${END_KEY})`,
      //.map((v) => `(${v})`),

      // INFINITE_SPACE_RX_KEY,
    ]
      // .map((v) => `(${v})`)
      .join('')}`;

    const INTERNAL_DEPENDENCY_PREFIX_RX = new RegExp(
      INTERNAL_DEPENDENCY_PREFIX_KEY,
      'gs'
    );

    const IMPORT_RX = new RegExp(`import`, 'g');

    const FROM_RX = new RegExp(FROM_RX_KEY);
    const INTERNAL_LIB_RX = new RegExp(
      INTERNAL_LIB_RX_KEY,
      'g'
    );
    const WS_UNION_RX = new RegExp(`(${WS_UNION_RX_KEY})`);
    const WITH_IMPORTS_RX = new RegExp(
      WITH_IMPORTS_RX_KEY,
      'g'
    );
    const COMMA_NL_RX = new RegExp(/,\n/, 'g');

    let nextWriteUpdates: TWuRecord = {};

    for await (const filePath of paths) {
      console.log(filePath);
      let file = await readFile(filePath, {
        encoding: 'utf-8',
      });
      let array1;
      const parts = [];
      while (
        (array1 =
          INTERNAL_DEPENDENCY_PREFIX_RX.exec(file)) !== null
      ) {
        parts.push(array1[0]);
      }
      if (!parts || parts.length === 0) continue;
      // console.log(parts);
      let i = 0;
      for await (let part of parts) {
        if (!part) continue;
        part = part.trim();
        let [imports, libPath] = part.split(FROM_RX);

        imports = imports?.trim();
        libPath = libPath?.trim();

        if (!imports) {
          continue;
        }

        if (!libPath) {
          continue;
        }

        const _wsName = libPath.replace(
          new RegExp(`.*?${INTERNAL_LIB_RX_KEY}\\/.*`),
          'lib/$1'
        );
        // console.log(_wsName);
        imports = imports.replace(IMPORT_RX, '');
        imports = imports.replace(/[{}]/g, '');

        imports = imports
          .split(COMMA_NL_RX)
          .map((v) => v.trim())
          .join(',');

        imports = imports?.trim();
        libPath = libPath?.trim();

        if (!imports) {
          continue;
        }

        if (!libPath) {
          continue;
        }
        let lib = libPath;

        if (INTERNAL_LIB_RX.test(libPath)) {
          const y0 = () => {
            console.log(`import of ${imports} from ${lib}`);

            const [appName, _wsName, subWsName] =
              lib.split('/');
            const wsName = _wsName;
            lib = [appName, wsName].join('/');
            if (subWsName && !/[A-Z]/.test(subWsName)) {
              const possibleSubWs = [
                wsName,
                subWsName,
              ].join('-');
              console.log('subWsName 3' + possibleSubWs);

              return resolvePossibleWs({
                lib,
                targets,
                filePath,
                possibleSubWs,
                subWsName,
                appName,
                wsName,
              });
            }
          };
          y0();
          const yResult = y0();
          if (yResult) {
            // console.log(yResult);
            const u1 = update({
              m: 'poss yResult',
              file,
              ...yResult,
              nextWriteUpdates,
            });
            nextWriteUpdates = {
              ...u1.nextWriteUpdates,
              ...nextWriteUpdates,
            };
            file = u1.nextFile;
            // _wsName = possibleSubWs;
          }
          // console.log("▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁");
          // console.dir(x0);
          // console.log("██████████████▓▒░ 🧨 ░▒ line: 162, file: index.ts ▓▒░ 🧨 ░▒██████████████");
          lib = libPath;
          const x = () => {
            const [
              appName,
              _wsName,
              subWsName,
              subWsName1,
            ] = lib.split('/');
            const wsName = _wsName;
            lib = [
              appName,
              wsName,
              subWsName,
              subWsName1,
            ].join('/');
            console.log('subWsName 2' + subWsName);
            if (subWsName && !/[A-Z]/.test(subWsName)) {
              const possibleSubWs = [
                wsName,
                subWsName,
                subWsName1,
              ].join('-');
              return resolvePossibleWs({
                lib,
                targets,
                filePath,
                possibleSubWs,
                subWsName,
                appName,
                wsName,
              });
              // const {
              //   file: _file,
              //   nextWriteUpdates: _nextWriteUpdates,
              //   wsName: __wsName,
              // } = xr;
              // nextWriteUpdates = {
              //   ...nextWriteUpdates,
              //   ..._nextWriteUpdates,
              // };
            }
          };
          const xResult = x();
          if (xResult) {
            //console.log(xResult);
            const u1 = update({
              m: 'poss xResult',
              file,
              nextWriteUpdates,
              ...xResult,
            });
            nextWriteUpdates = {
              ...u1.nextWriteUpdates,
              ...nextWriteUpdates,
            };
            file = u1.nextFile;
            // _wsName = possibleSubWs;
          }

          const ws = targets.find(
            (v) =>
              v.workspace === _wsName &&
              v.subWorkspaces.length > 0
          );

          if (ws) {
            console.log('WS ', ws.name, libPath, imports);
            // const xs = file.match(prefix) ?? [];
            // const x = xs[index];
            // imports = x?.split(/[{}]/g) ?? [];
            // imports = imports.filter(
            //   (v) => !(/import /.test(v) || /from /.test(v))
            // );
            //  imports = imports.map((v) => v.trim());
            const FILES_GLOB = `${ws.dir}/**/*.(ts|tsx)`;
            const wsPaths = await glob([FILES_GLOB]);

            for await (const wsPath of wsPaths) {
              const wsPathFile = await readFile(wsPath, {
                encoding: 'utf-8',
              });

              imports.split(',').forEach((v) => {
                const rx = new RegExp(
                  `export (const|type) ${v}[\\s,\\n]`
                );

                const matches = wsPathFile.match(rx);

                if (matches && matches?.length > 0) {
                  // console.log(matches);

                  ws.subWorkspaces.forEach((swsPkgPath) => {
                    const swsId = swsPkgPath.replace(
                      `/${PACKAGE_JSON_NAME}`,
                      ''
                    );
                    // console.log(wsPath, swsId);
                    if (wsPath.includes(swsId)) {
                      const sws = targets.find(
                        (v) => v.workspace === swsId
                      );

                      if (!sws) return;
                      let prev = libPath.replace(
                        /[;'"]/g,
                        ''
                      );
                      prev = prev;

                      // [appName, wsName].join(
                      //   '/'
                      // );
                      const next = [
                        INTERNAL_NAME,
                        sws.name,
                      ].join('/');

                      const prevParts = prev.split(/[/-]/g);
                      const prevDelimiters = prev
                        .split(/[^/-]*/g)
                        .filter(Boolean);

                      const nextParts = next.split(/[/-]/g);

                      prev = prevParts
                        .filter((_, i) =>
                          Boolean(nextParts[i])
                        )
                        .map((v, i) =>
                          i === 0
                            ? v
                            : `${prevDelimiters[i]}${v}`
                        )
                        .join('');

                      const u2 = update({
                        m: '2',
                        file,
                        path: filePath,
                        prev,
                        next,
                        nextWriteUpdates,
                      });
                      nextWriteUpdates = {
                        ...u2.nextWriteUpdates,
                        ...nextWriteUpdates,
                      };
                      file = u2.nextFile;
                    }
                  });
                }
              });
            }
          }
        } else {
          i++;
        }
      }

      updates = { ...updates, ...nextWriteUpdates };
    }
    console.log(
      '██████████████▓▒░ 🧨 ░▒ END ▓▒░ 🧨 ░▒██████████████'
    );
    // console.log(updates);
    // console.log(INTERNAL_DEPENDENCY_PREFIX_RX);
    console.log(
      faint(`${paths.length} paths found in ${GLOBS}`)
    );

    const entries = Object.entries(updates);
    console.log(`${entries.length} found`);
    // console.log JSON.stringify(updates, null, 2));
    for await (const [key, writeUpdate] of entries) {
      //   console.log('----');
      //   console.log(key);
      const [path, nextFile, reason] = writeUpdate;
      console.log(nextFile);
     // await writeFile(path, nextFile);
      //   console.log('----');
      console.log(path);
      console.log(reason);
      //   console.log('||||');

      //   console.log(nextFile);
      //   console.log('----');
    }
  } catch (error: TError) {
    throw new Error(error);
  }
};
