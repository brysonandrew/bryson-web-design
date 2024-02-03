import { EXTRACT_EXPORT_AND_PREFIX } from '@ops/utils';
import type { TConfig } from '../config/types/indexer';
const DEFAULT_EXCLUDE_INDEXING_DIRS = ['.', 'ops'];

export type TConfigLookup = Record<string, TConfig>;
export type TConfigMultiLookup = Record<string, TConfig[]>;
export const configLookup = (
  initDir: string,
): TConfigLookup => ({
  ts: {
    initDir,
    exportRx: EXTRACT_EXPORT_AND_PREFIX,
    exportExtGlob: '*.{ts,tsx,json}',
    excludeIndexingDirs: DEFAULT_EXCLUDE_INDEXING_DIRS,
    transformMatch: (match: string | RegExpMatchArray) =>
      match.toString().replace(/^const /, 'named '),
  },
  last: {
    initDir,
    excludeIndexingDirs: DEFAULT_EXCLUDE_INDEXING_DIRS,
    excludeIndexingDirsWithFiles: ['index.ts'],
    exportRx: EXTRACT_EXPORT_AND_PREFIX,
    exportExtGlob: '*.ts',
    transformMatch: (match: string | RegExpMatchArray) =>
      match.toString().replace(/^const /, 'named '),
    maxDepth: -1,
  },
  singleDir: {
    initDir,
    excludeIndexingDirs: DEFAULT_EXCLUDE_INDEXING_DIRS,
    excludeIndexingDirsWithFiles: ['index.tsx', 'index.ts'],
    exportRx: EXTRACT_EXPORT_AND_PREFIX,
    exportExtGlob: '*.ts',
    transformMatch: (match: string | RegExpMatchArray) =>
      match.toString().replace(/^const /, 'named '),
    maxDepth: -1,
  },
});
