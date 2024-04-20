import { TStringRecord } from '@brysonandrew/config-types/object';
import { INTERNAL_PREFIX } from '@ops/exporter/config/constants';

export type TInternalPrefix = typeof INTERNAL_PREFIX;
export type TInternalLib = `${TInternalPrefix}${string}`;

export type TTargetId = string;

export type TWriteUpdate = readonly [
  entryPath: string,
  content: string
];
export type TWriteUpdates = TWriteUpdate[];

export type TTarget = {
  name: TTargetId;
  dir: string;
  base: string;
  workspace: string;
  subWorkspaces: string[];
  pkg: object;
  pkgPath: string;
  version: string;
  indexRows: TStrRows;
  dependencies: TStringRecord;
  peerDependencies: TStringRecord;
  exportRows: TStrRows;
  main: object;
  types: object;
  writeUpdates: TWriteUpdates;
};

export type TTargets = TTarget[];

export type TWorkspaces = string[];

export type TInternalTsPathRecord = Record<
  TInternalLib,
  string[]
>;
export type TTsPathRecord = Record<string, string[]> &
  TInternalTsPathRecord;

export type TStrRows = string[];

export type TPackageWithExports = string[];
export type TPackageExportRecord = Record<string, unknown>;

export type TPackageWithExportsRecord = Record<
  string,
  TPackageExportRecord
>;
