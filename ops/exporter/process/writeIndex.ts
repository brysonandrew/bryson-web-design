import glob from 'fast-glob';
import { readFile } from '@ops/common/utils';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { QUOTE_UPDATE_RX, QUOTE } from './constants';

type TConfig = {
  full: string;
  indexRows: string[];
};
export const writeIndex = async ({
  full,
  indexRows,
}: TConfig) => {
  const indices = await glob(
    ['./index.ts', './index.tsx'],
    {
      cwd: full,
    },
  );
  let indexStr = '';
  let indexPath = join(full, 'index.ts');

  const nextIndexStr = indexRows.join('\n');
  if (indices.length > 0) {
    indexPath = join(full, indices[0]);
    indexStr = readFile(indexPath);
    const exportStartIndex = indexStr.indexOf(
      'export * from ',
    );
    const exportEndIndex = indexStr.lastIndexOf(';');

    if (exportEndIndex > -1 && exportStartIndex > -1) {
      const indexExportStr = indexStr.slice(
        exportStartIndex,
        exportEndIndex,
      );

      indexStr = indexStr.replace(
        indexExportStr,
        nextIndexStr,
      );
    } else {
      indexStr = [indexStr, nextIndexStr].join('\n');
    }
  }

  indexStr = indexStr.replace(QUOTE_UPDATE_RX, QUOTE);
  indexStr = `${indexStr}\n`;

  writeFile(indexPath, indexStr);
};
