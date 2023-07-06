import { DEFAULT_EXT, resolveMedia } from "@pages/showcase/config";
import { TScreensCountRecord, TScreensRecord } from "@state/types";

export const resolveScreensCountRecord = (screensRecord: TScreensRecord) => Object.keys(
  screensRecord,
).reduce((a: TScreensCountRecord, key: string) => {
  const media = resolveMedia(key);
  if (media.ext === DEFAULT_EXT) {
    a[media.source] = ~~a[media.source] + 1;
  }
  return a;
}, {});
