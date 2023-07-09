


import { TImageRecord, TScreensLookup } from '@t/screens';
import { resolveMediaRecordByIndex } from './resolveMediaRecordByIndex';

export type TResolveMediaConfig = {
  screensLookup: TScreensLookup;
  indicies: number[];
};
export const resolveMediaRecords = async ({
  indicies,
  screensLookup
}: TResolveMediaConfig
) => {
  const record: TImageRecord = {};

  for await (const index of indicies) {
    const mediaRecord = await resolveMediaRecordByIndex({ index, screensLookup });
    record[mediaRecord.png.key] = mediaRecord;
  }

  return Object.values(record);
};
