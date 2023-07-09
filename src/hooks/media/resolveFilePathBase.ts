import { resolveMediaDetails } from "@pages/projects/config";
import { TFilePathBaseKey, TFilePathKey } from "@t/media";
import { TScreensLookup } from "@t/screens";

export type TResolveRandomMediaConfig = {
  filePath: TFilePathBaseKey;
  screensLookup: TScreensLookup;
};
export const resolveFilePathBase = async (filePath: TFilePathKey) => {
  return resolveMediaDetails(filePath);
};
