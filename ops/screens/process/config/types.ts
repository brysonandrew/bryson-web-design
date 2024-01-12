export type TScreensRecord = Record<string, TMediaRecords>;
export type TExtKey = (typeof EXTS)[number];
import { TProjectKey } from '@pages/projects/config/types';
import { EXTS } from '@constants/media';

import type { Metadata, OutputInfo } from 'sharp';
import { TSource } from '@t/dom';

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

export type TMediaDetails = {
  key: string;
  project: TProjectKey;
  file: string;
  name: string;
  ext: TExtKey;
};
