import glob from 'fast-glob';
import { readFile } from '@ops/utils';

export const ENTRIES = [
  ['types', './types'],
  ['constants', '@brysonandrew/color/constants'],
  ['config', './config'],
] as const;

type TEntry = (typeof ENTRIES)[number];

export const KEYS = ENTRIES.map(([key]: TEntry) => key);
type TKey = (typeof KEYS)[number];
export type TVarRecord = Record<string, string[]>;
export type TVarRecords = Record<TKey, TVarRecord>;
export type TVarRecord2 = Record<string, string>;
export type TVarRecords2 = Record<string, TVarRecord2>;

type TConfig = {
  varsRecords: TVarRecords;
};
export const replaceImports = async ({
  varsRecords,
}: TConfig) => {
  const next = {} as TVarRecords2;
  KEYS.forEach((key) => {
    const lookup = varsRecords[key];
    if (!lookup) return;
    next[key] = Object.entries(lookup).reduce(
      (a, [key, c]: [string, string[]]) => {
        c.forEach((v: string) => {
          a[v] = key;
        });
        return a;
      },
      {} as TVarRecord2,
    );
  });

  const filePaths = await glob(['src/**/*.(ts|tsx)']);

  for (const filePath of filePaths) {
    const file = readFile(filePath);

    const rows = file.split('\n');
    const nextRows = [];
    let isParsingImport = false;
    for (const [key, target] of ENTRIES) {
      if (!file.includes(target)) continue;
      for (let row of rows) {
        const replacements: string[] = [];
        row = row.trim();
        const isImport = row.startsWith('import ');

        if (isImport) {
          row = row.replace('import ', '');

          if (isImport || isParsingImport) {
            row = row.replace(/as \w+/g, '');

            // console.log(row)
            row = row.replace(/type /g, '');

            const parts = row.split(/,/);
            parts.forEach((part) => {
              part = part.replace(/from .*/, '');
              part = part.replace(/[{}\s]/g, '');

              const replacement = part.trim();
              if (/\w/.test(replacement)) {
                replacements.push(replacement);
              }
            });

            const endIndex = row.search(
              new RegExp(`["']{1}[;]{1}\s*`),
            );
            isParsingImport = endIndex === -1;

            if (isParsingImport) {
            } else {
              const isTarget = new RegExp(
                `["']{1}${target}["']{1}[;]{1}\s*`,
              ).test(row);
              if (isTarget) {
                const lookup: TVarRecord2 = next[key];
                if (!lookup) continue;
                const paths: string[] = [];
                replacements.forEach((replacement) => {
                  const path = lookup[replacement];
                  if (!path) return;
                  paths.push(path);
                });
                console.log('paths');
                console.log(paths);
                console.log('replacements');
                console.log(replacements);
                // if (paths.length > 0) {
                //   console.log('paths');
                //   console.log(paths);
                //   console.log('replacements');
                //   console.log(replacements);
                // }
              }
            }
          }
        }
      }

      // }
    }
    // if (isUpdate) {
    //   const nextFile = nextRows.join('\n');
    //   writeFile(nextFile, file);
    // }
  }
};
