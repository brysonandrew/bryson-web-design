import { TTargets } from '@ops/exporter/config/types';
import { writeFile } from 'fs/promises';

type TConfig = TTargets;
export const writeUpdates = async (
  targets: TConfig
) => {
  for await (const { name, writeUpdates } of targets) {
    for await (const [entryPath, content] of writeUpdates) {
      await writeFile(entryPath, content);
    }
  }
};
