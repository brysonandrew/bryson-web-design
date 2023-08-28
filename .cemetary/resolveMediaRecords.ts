import { TMediaRecord } from '../ops/screens/types/media';
import { resolveMediaRecordByIndex } from '../src/hooks/media/resolveMediaRecordByIndex';
import { TScreensLookup } from '../src/types/screens';

export type TResolveMediaConfig = {
  screensLookup: TScreensLookup;
  indicies: number[];
};
export const resolveMediaRecords = async ({
  indicies,
  screensLookup,
}: TResolveMediaConfig) => {
  let records: TMediaRecords = [];
  // for await (const index of indicies) {
  //   try {
  //     const mediaRecord = await resolveMediaRecordByIndex({
  //       index,
  //       screensLookup,
  //     });
  //     records.push(mediaRecord);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  console.time('P');

  const promises = indicies.reduce(
    (a: Promise<TMediaRecord>[], index) => {
      const mediaRecord = resolveMediaRecordByIndex({
        index,
        screensLookup,
      });
      a.push(mediaRecord);
      return a;
    },
    [],
  );

  try {
    records = await Promise.all(promises);
  } catch (error) {
    console.error(error);
  }

  console.timeEnd('P');
  console.log('DONE');

  return records;
};
