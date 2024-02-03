import glob from 'fast-glob';
import { readFile } from '@ops/utils';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { QUOTE_UPDATE_RX } from '@brysonandrew/exporter/config/constants';
import { QUOTE } from '@ops/config/constants';

type TConfig = {
  dir: string;
  indexRows: string[];
};
export const writeIndex = async ({
  dir,
  indexRows,
}: TConfig) => {
  const indices = await glob(
    ['./index.ts', './index.tsx'],
    {
      cwd: dir,
    },
  );
  let indexStr = '';
  let indexPath = join(dir, 'index.ts');

  const nextIndexStr = indexRows.join('\n');
  if (indices.length > 0) {
    indexPath = join(dir, indices[0]);
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

  writeFile(indexPath, indexStr);
};
