import { DEFAULT_EXT, PNG_EXT, WEBP_EXT } from "@constants/media";
import { resolveMediaRecord } from "@pages/projects/config";
import { TModuleEntries } from "@t/media";
import { TScreensLookup } from "@t/screens";
import { resolveWebpFilePath } from "./resolveFilePathByExt";

export type TResolveIndexedMediaConfig = {
  index: number;
  screensLookup: TScreensLookup;
};
export const resolveMediaRecordByIndex = async ({ index, screensLookup }: TResolveIndexedMediaConfig) => {
  const entries: TModuleEntries = Object.entries(screensLookup[DEFAULT_EXT]);
  const [filePath, resolver] = entries[index];
  const webpFilePath = resolveWebpFilePath(filePath);
  console.log(resolver);
  const webpResolver = screensLookup[WEBP_EXT][webpFilePath];
  console.log(webpResolver);

  const mediaRecord = await resolveMediaRecord({
    png: { filePath, resolver },
    webp: { filePath: webpFilePath, resolver: webpResolver },
  });

  return mediaRecord;
};
