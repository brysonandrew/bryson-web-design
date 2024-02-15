import {
  TMediaRecord,
  TFilePathKey,
} from '@brysonandrew/media';
import { TAnyRecord } from '@brysonandrew/config-types';
import { writeFileData } from '@ops/utils/write';
import { LOOKUP_PATH } from '@ops/screens/config/constants';

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
