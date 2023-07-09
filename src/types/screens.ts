import { TProjectKey } from "@constants/projects";
import { TExtKey, TFilePathKey, TMediaRecord } from "./media";

export type TModule = {
  default: string;
};
export type TResolver = () => Promise<unknown | TModule>; // unknown is gene

export type TScreensCountRecord = Record<TFilePathKey, number>;
export type TScreensRecord = Record<TFilePathKey, TResolver>;
export type TScreensLookup = Record<TExtKey, TScreensRecord>;

export type TImageRecord = Record<TFilePathKey, TMediaRecord>;
export type TProjectImageRecord = Record<TProjectKey, TImageRecord>;
export type TPartialProjectImageRecord = { [key: TProjectKey]: TImageRecord; };
