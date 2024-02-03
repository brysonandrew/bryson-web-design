import { EXTS } from '@brysonandrew/media/config/constants';
import { TSource } from '@brysonandrew/config/types';
import type { OutputInfo, Metadata } from 'sharp';

export type TModule = {
  default: string;
};
export type TResolver = () => Promise<unknown | TModule>; // unknown is gene

export type TResolverRecord = Record<
  TFilePathKey,
  TResolver
>;
export type TResolverRecordEntry = [
  TFilePathKey,
  TResolver,
];

export type TScreensLookup = Record<
  TExtKey,
  TResolverRecord
>;

export type TScreensRecordEntry = [
  TFilePathKey,
  TMediaRecord,
];
export type TScreensRecordEntries = TScreensRecordEntry[];

export type TScreensRecord = Record<
  TFilePathKey,
  TMediaRecord[]
>;
export type TImageResolverRecord = Record<
  TFilePathKey,
  any
>;
export type TImageResolverEntry = [TFilePathKey, any];
export type TImageResolverEntries = TImageResolverEntry[];

export type TExtKey = (typeof EXTS)[number];

export type TDimensions = { width: number; height: number };

export type TFilePathKey = string;
export type TFilePathBaseKey = string;

export type TMedia = {
  src: string;
  alt: string;
};

export type TSources = TSource[];

export type TAppMeta = {
  project: string;
};

export type TFsMeta = {
  name: string;
  dir: string;
};

export type TMediaMetadata = Partial<OutputInfo & Metadata>;

export type TMediaRecord = TAppMeta &
  TFsMeta &
  TMedia &
  TDimensions & {
    // metadata: TMediaMetadata; to large and useless
    sources: TSource[];
  };
export type TMediaRecords = TMediaRecord[];

export type TMediaDetails<T extends string> = {
  key: string;
  project: T;
  file: string;
  name: string;
  ext: TExtKey;
};
