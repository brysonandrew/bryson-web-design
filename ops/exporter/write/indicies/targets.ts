import { writeIndiciesTarget } from '@ops/exporter/write/indicies/target';
import { TTargets } from '@ops/exporter/config/types';

type TConfig = TTargets;
export const writeIndiciesTargets = async (
  targets: TConfig
) => {
  for await (const { name, dir, indexRows } of targets) {
 
    await writeIndiciesTarget({ dir, indexRows });
  }
};
