import { TError } from '@brysonandrew/config-types';
import {
  TTargets,
  TTarget,
} from '@ops/exporter/config/types';
import { writeExportsTarget } from '@ops/exporter/write/exports/target';
import { green } from '@ops/console';

export const writeExportsTargets = async (
  targets: TTargets
) => {
  const nextTargets: TTargets = [];

  try {
    for await (const target of targets) {
      const name = target.name;
      green(`Writing exports for ${name}`);

      const { indexRows } = await writeExportsTarget(
        target
      );
      const nextTarget: TTarget = {
        ...target,
        indexRows: [...target.indexRows, ...indexRows],
      };
      nextTargets.push(nextTarget);
    }
  } catch (error: TError) {
    throw Error(error);
  } finally {
    return nextTargets;
  }
};
