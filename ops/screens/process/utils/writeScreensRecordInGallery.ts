import {
  TMediaRecord,
  TFilePathKey,
} from '@brysonandrew/media';
import { LOOKUP_PATH } from '@brysonandrew/screens/process/constants';
import { TAnyRecord } from '@brysonandrew/types';
import { writeFileData } from '@ops/utils/write';

export const writeScreensRecordInGallery = (
  next: TMediaRecord | null,
  name: TFilePathKey,
  screensRecord: TAnyRecord,
) => {
  if (next) {
    screensRecord[name] = [
      ...(screensRecord[name] ?? []),
      next,
    ];
  }
  writeFileData(LOOKUP_PATH, screensRecord);
  return screensRecord;
};
