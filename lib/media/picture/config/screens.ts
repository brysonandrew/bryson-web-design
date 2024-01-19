import {
  TExtKey,
  TFilePathKey,
  TMediaRecord,
} from '@brysonandrew/lib/media/picture/config/types';

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
  TMediaRecord[]
>;
export type TImageResolverRecord = Record<
  TFilePathKey,
  any
>;
export type TImageResolverEntry = [TFilePathKey, any];
export type TImageResolverEntries = TImageResolverEntry[];
