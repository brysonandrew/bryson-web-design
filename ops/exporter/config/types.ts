import { TStringRecord } from '@brysonandrew/config-types';
import { INTERNAL_PREFIX } from '@ops/exporter/config/constants';

export type TInternalPrefix = typeof INTERNAL_PREFIX;
export type TInternalLib = `${TInternalPrefix}${string}`;

export type TTargetId = string;

export type TTarget = {
  name: TTargetId;
  dir: string;
  base: string;
  workspace: string;
  subWorkspaces: string[];
  pkg: object;
  pkgPath: string;
  version: string;
  indexRows: TIndexRows;
  dependencies: TStringRecord;
  peerDependencies: TStringRecord;
};

export type TTargets = TTarget[];

export type TWorkspaces = string[];

export type TInternalTsPathRecord = Record<
  TInternalLib,
  string[]
>;
export type TTsPathRecord = Record<string, string[]> &
  TInternalTsPathRecord;

export type TIndexRows = string[];

export type TPackageWithExports = string[];
export type TPackageExportRecord = Record<string, unknown>;

export type TPackageWithExportsRecord = Record<
  string,
  TPackageExportRecord
>;
