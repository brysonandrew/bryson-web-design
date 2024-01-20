import { TAnyRecord } from '@brysonandrew/base';
import {
  TMediaRecord,
  TFilePathKey,
} from '@brysonandrew/media';
import { writeFileData } from '@ops/utils/write';
import { LOOKUP_PATH } from '../constants';

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
