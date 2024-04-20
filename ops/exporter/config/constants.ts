import {
  TWorkspaces,
  TInternalTsPathRecord,
} from '@ops/exporter/config/types';
import { QUOTE_RX } from '@ops/config/constants';
import { TTarget } from '@ops/exporter/config/types';

export const exportsPrefixStr = 'export * from ';
export const exportsPrefixRx = new RegExp(
  'export.*from',
  'gi'
);
export const removeCharsRx = new RegExp(`[;"']`, 'gi');
export const INTERNAL_PREFIX = '@brysonandrew/' as const;

export const DEP_PREFIX_RX = new RegExp(
  /import [*\w\s{},]+ from ['"]/,
  'ig'
);
export const QUOTE_UPDATE_RX = new RegExp(QUOTE_RX, 'ig');

export const EMPTY_TARGET: TTarget = {
  name: '',
  dir: '',
  base: '',
  workspace: '',
  subWorkspaces: [],
  pkg: {},
  pkgPath: '',
  version: '',
  indexRows: [],
  dependencies: {},
  peerDependencies: {},
  exportRows: [],
  main: {},
  types: {},
  writeUpdates: []
};

export const INIT_WORKSPACES: TWorkspaces = [];
export const INIT_TS_PATH_RECORD: TInternalTsPathRecord =
  {};
  export const EXCLUDE_PREFIXES = [
    'src/',
    'ops/',
    'lib/',
    `@app/`,
    `@uno/`,
    `@vite/`,
    '@t/',
  ] as const;
  