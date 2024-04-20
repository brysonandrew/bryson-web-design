import { writeIndiciesTarget } from '@ops/exporter/write/indicies/target';
import { green } from '@ops/console';
import { TTargets } from '@ops/exporter/config/types';

type TConfig = TTargets;
export const writeIndiciesTargets = async (
  targets: TConfig
) => {
  for await (const { name, dir, indexRows } of targets) {
    green(`Writing index for ${name}`);
    await writeIndiciesTarget({ dir, indexRows });
  }
};
