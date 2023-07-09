import { TProjectKey } from "@constants/projects";
import { TExtKey, TFilePathKey, TMediaRecord, TModuleRecord } from "./media";

export type TModule = {
  default: string;
};
export type TResolver = () => Promise<unknown | TModule>; // unknown is gene

export type TScreensRecord = Record<TFilePathKey, TResolver>;
export type TScreensLookup = Record<TExtKey, TScreensRecord>;

export type TImageRecordValue = TMediaRecord | TModuleRecord;
export type TImageRecordEntry = [TFilePathKey, TImageRecordValue];
export type TImageRecordEntries = TImageRecordEntry[];

export type TImageRecord = Record<TFilePathKey, TImageRecordValue>;
export type TProjectImageRecord = Record<TProjectKey, TImageRecord>;
export type TPartialProjectImageRecord = { [key: TProjectKey]: TImageRecord; };
