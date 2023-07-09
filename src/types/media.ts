import { EXTS, WEBP_EXT, DEFAULT_EXT } from "@constants/media";
import { TResolver } from "./screens";

export type TFilePathKey = string;
export type TFilePathBaseKey = string;

export type TExtKey = typeof EXTS[number];

export type TMediaDetails = {
  key: string;
  source: string;
  file: string;
  name: string;
  ext: TExtKey;
};

export type TMedia = TMediaDetails & {
  src: string;
};

export type TModuleConfig = { filePath: string, resolver: TResolver; };
export type TModuleEntry = [filePath: string, resolver: TResolver];
export type TModuleEntries = TModuleEntry[];

export type TModuleRecord = {
  [WEBP_EXT]: TModuleConfig;
  [DEFAULT_EXT]: TModuleConfig;
};

export type TMediaRecord = {
  [WEBP_EXT]: TMedia;
  [DEFAULT_EXT]: TMedia;
};
