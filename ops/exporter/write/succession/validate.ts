import { QUOTE_RX } from '@ops/config/constants';
import { isRelative } from '@ops/utils/exporter/config';
import { TTargets } from '@ops/exporter/config/types';
import { processLib } from '@ops/exporter/write/succession/process-lib';
import { TWuRecord } from '@ops/exporter/write/succession/update';
import {
  fileParts,
  TFilePartsConfig,
} from '@ops/exporter/utils/file-parts';
import { filePartsMatch } from '@ops/exporter/utils/file-parts/match';

type TConfig = TFilePartsConfig & {
  targets: TTargets;
};
export const validate = async ({
  targets,
  ...filePartsConfig
}: TConfig) => {
  let nextWriteUpdates: TWuRecord = {};

  const filePartsResult = await filePartsMatch(
    filePartsConfig
  );
  if (filePartsResult === null) return nextWriteUpdates;
  const { file, parts } = filePartsResult;
  if (parts) {
    console.log(parts);
  }
  let index = 0;
  partsLoop: for await (const part of parts) {
    if (isRelative(part)) {
      index++;
      continue partsLoop;
    }

    const writeUpdates = await processLib({
      lib: part,  
      file,
      index,
      targets,
      ...filePartsConfig,
    });
    nextWriteUpdates = {
      ...nextWriteUpdates,
      ...writeUpdates,
    };
    index++;
  }

  return nextWriteUpdates;
};
