import { INTERNAL_PREFIX } from '@ops/exporter/config/constants';

export type TInternalPrefix = typeof INTERNAL_PREFIX;
export type TInternalLib = `${TInternalPrefix}${string}`;

export type TTarget = {
  name: string;
  dir: string;
  base: string;
  workspace: string;
  subWorkspaces: string[];
};

export type TTargets = TTarget[];

export type TWorkspaces = string[];

export type TInternalTsPathRecord = Record<
  TInternalLib,
  string[]
>;
export type TTsPathRecord = Record<string, string[]> &
  TInternalTsPathRecord;
