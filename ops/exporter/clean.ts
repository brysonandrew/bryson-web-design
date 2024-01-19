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
import { PACKAGE_JSON_NAME } from '../common/types/exporter';

export const clean = (targets: TPathRecord) => {
  if (!targets) return null;
  for (const { full, parent, name } of Object.values(
    targets,
  ) as TPath[]) {
    [
      path.join(full, PACKAGE_JSON_NAME),
      path.join(full, 'types'),
    ].forEach((pathToRm) => {
      if (resolveDir(pathToRm) || resolveFile(pathToRm)) {
        rmSync(pathToRm, { recursive: true });
      }
    });
  }
};
