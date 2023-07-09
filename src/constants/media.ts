
import { TScreensLookup } from "@t/screens";

export const PNG_EXT = "png";
export const WEBP_EXT = "webp";
export const DEFAULT_EXT = PNG_EXT;

export const EXTS = [PNG_EXT, WEBP_EXT] as const;

export const EMPTY_SCREENS_LOOKUP: TScreensLookup = {
  [WEBP_EXT]: {},
  [PNG_EXT]: {}
};
