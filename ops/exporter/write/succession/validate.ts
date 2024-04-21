import { QUOTE_RX } from '@ops/config/constants';
import { isRelative } from '@ops/utils/exporter/config';
import { readFile } from 'fs/promises';
import {
  TTargets,
  TWriteUpdate,
  TWriteUpdates,
} from '@ops/exporter/config/types';
import { processLib } from '@ops/exporter/write/succession/process-lib';
import { TWuRecord } from '@ops/exporter/write/succession/update';

type TConfig = {
  filePath: string;
  prefix: RegExp;
  targets: TTargets;
};
export const validate = async ({
  filePath,
  prefix,
  targets,
}: TConfig) => {
  const file = await readFile(filePath, {
    encoding: 'utf-8',
  });

  let nextWriteUpdates: TWuRecord = {};

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
      const writeUpdates = await processLib({
        lib: part.slice(0, endIndex),
        filePath,
        file,
        targets,
        index,
        prefix,
      });
      nextWriteUpdates = {
        ...nextWriteUpdates,
        ...writeUpdates,
      };
    }
    index++;
  }

  return nextWriteUpdates;
};
