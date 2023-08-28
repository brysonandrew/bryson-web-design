import { resolveMediaDetails } from "@pages/projects/config";
import { TFilePathBaseKey, TFilePathKey } from "@ops/screens/types/media";
import { TScreensLookup } from "@t/screens";

export type TResolveRandomMediaConfig = {
  filePath: TFilePathBaseKey;
  screensLookup: TScreensLookup;
};
export const resolveFilePathBase = async (filePath: TFilePathKey) => {
  return resolveMediaDetails(filePath);
};
