import glob from 'fast-glob';
import { TError } from '@brysonandrew/config-types';
import { resolvePwd } from '@ops/utils/dirs/pwd';
import { DEP_PREFIX_RX } from '@ops/exporter/config/constants';
import { replace } from '@ops/exporter/write/succession/replace';
import {
  TTargets,
  TWriteUpdates,
} from '@ops/exporter/config/types';
import { writeFile } from 'fs/promises';

export const succession = async (targets: TTargets) => {
  try {
    const cwd = resolvePwd();
    const FILES_GLOB = `${cwd}/src/**/*.(ts|tsx)`;
    const paths = await glob([FILES_GLOB], {});

    let updates: TWriteUpdates = [];
    console.log(paths);
    for await (const path of paths) {
      const writeUpdates = await replace({
        filePath: path, //filePath
        prefix: DEP_PREFIX_RX,
        targets,
      });
      updates = [...updates, ...writeUpdates];
    }

    console.log(updates.map(([v]) => v));
    for await (const [entryPath, content] of updates) {
      await writeFile(entryPath, content);
    }
  } catch (error: TError) {
    throw new Error(error);
  }
};
