import { writeFileData } from "@ops/utils/write";
import { TMediaRecord, TFilePathKey, TScreensRecord } from "../../../media/picture/config/types";
import { LOOKUP_PATH } from "../constants";

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
