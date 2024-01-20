import path from 'path';
import { rmSync } from 'fs';
import {
  resolveDir,
  CACHE_EXPORTER_NAME,
  resolveFile,
} from '../common/utils';
import type {
  TPath,
  TPathRecord,
} from '../common/types/entries';

export const clean = (targets: TPathRecord) => {
  if (!targets) return null;
  for (const { full, parent, name } of Object.values(
    targets,
  ) as TPath[]) {
    [].forEach((pathToRm) => {
      if (resolveDir(pathToRm) || resolveFile(pathToRm)) {
        rmSync(pathToRm, { recursive: true });
      }
    });
  }
};
