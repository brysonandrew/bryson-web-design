import { resolveMediaDetails } from "@pages/projects/config";
import { TFilePathKey } from "@t/media";
import { TScreensRecord, TScreensCountRecord } from "@t/screens";

export const resolveProjectScreensCountRecord = (screensRecord: TScreensRecord) => Object.keys(
  screensRecord,
).reduce((a: TScreensCountRecord, key: TFilePathKey) => {
  const media = resolveMediaDetails(key);
  a[media.source] = ~~a[media.source] + 1;

  return a;
}, {});
