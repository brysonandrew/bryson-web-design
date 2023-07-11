import { TProjectKey } from '@constants/projects';
import {
  TExtKey,
  TFilePathKey,
  TMediaRecord,
  TModuleRecord,
} from './media';

export type TModule = {
  default: string;
};
export type TResolver = () => Promise<unknown | TModule>; // unknown is gene

export type TScreensRecord = Record<
  TFilePathKey,
  TResolver
>;
export type TScreensRecordEntry = [TFilePathKey, TResolver];

export type TScreensLookup = Record<
  TExtKey,
  TScreensRecord
>;

export type TImageRecordEntry = [
  TFilePathKey,
  TMediaRecord,
];
export type TImageRecordEntries = TImageRecordEntry[];

export type TImageRecord = Record<
  TFilePathKey,
  TMediaRecord
>;
export type TProjectImageRecord = Partial<
  Record<TProjectKey, TImageRecord>
>;
export type TPartialProjectImageRecord = {
  [key: TProjectKey]: TImageRecord;
};

export type TImageResolverRecord = Record<
  TFilePathKey,
  TModuleRecord
>;
export type TImageResolverEntry = [
  TFilePathKey,
  TModuleRecord,
];
export type TImageResolverEntries = TImageResolverEntry[];

export type TProjectImageResolverRecord = Record<
  TProjectKey,
  TImageResolverRecord
>;
