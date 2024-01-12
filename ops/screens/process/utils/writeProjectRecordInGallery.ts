import { writeFileData } from "@ops/utils/write";
import { LOOKUP_PATH } from "../config/constants";
import { TMediaRecord, TFilePathKey, TScreensRecord } from "../config/types";

export const writeProjectRecordInGallery = (
  next: TMediaRecord | null,
  name: TFilePathKey,
  projectRecord: TScreensRecord,
) => {
  if (next) {
    projectRecord[name] = [
      ...(projectRecord[name] ?? []),
      next,
    ];
  }
  writeFileData(LOOKUP_PATH, projectRecord);
  return projectRecord;
};
