import type { Metadata, OutputInfo } from 'sharp';
import { TSource } from '@lib/types/dom/element';
import { TScreensLookup } from './screens';

export type TScreensRecord = Record<string, TMediaRecords>;
export type TExtKey = (typeof EXTS)[number];

export const PNG_EXT = 'png';
export const WEBP_EXT = 'webp';
export const DEFAULT_EXT = PNG_EXT;

export const EXTS = [PNG_EXT, WEBP_EXT] as const;

export const EMPTY_SCREENS_LOOKUP: TScreensLookup = {
  [WEBP_EXT]: {},
  [PNG_EXT]: {},
};

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
