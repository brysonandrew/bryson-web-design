import glob from 'fast-glob';
import { TError } from '@brysonandrew/config-types';
import { resolvePwd } from '@ops/utils/dirs/pwd';
import { DEP_PREFIX_RX } from '@ops/exporter/config/constants';
import { validate } from '@ops/exporter/write/succession/validate';
import { TTargets } from '@ops/exporter/config/types';
import { faint, green } from '@brysonandrew/ops';
import { TWuRecord } from '@ops/exporter/write/succession/update';
import { writeFile } from 'fs/promises';

export const succession = async (targets: TTargets) => {
  try {
    const cwd = resolvePwd();
    const FILES_GLOB = `${cwd}/src/**/*.(ts|tsx)`;
    const paths = await glob([FILES_GLOB], {});
    let updates: TWuRecord = {};
    // console.log(paths);
    console.log(
      faint(`${paths.length} paths found in ${FILES_GLOB}`)
    );
    for await (const path of paths) {
      const writeUpdates = await validate({
        filePath: path, //filePath
        prefix: DEP_PREFIX_RX,
        targets,
      });
      updates = { ...updates, ...writeUpdates };
    }
    const entries = Object.entries(updates);
    console.log(`${entries.length} found`);
    // console.log(JSON.stringify(updates, null, 2));
    for await (const [key, writeUpdate] of entries) {
      //   console.log('----');

      //   console.log(key);
      const [path, nextFile, reason] = writeUpdate;
      await writeFile(path, nextFile);
      //   console.log('----');
      //   console.log(path);
        console.log(reason);
      //   console.log('||||');

      //   console.log(nextFile);
      //   console.log('----');
    }
  } catch (error: TError) {
    throw new Error(error);
  }
};
