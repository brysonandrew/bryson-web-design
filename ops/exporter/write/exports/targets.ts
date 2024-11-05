import { TError } from '@brysonandrew/config-types/dom';
import {
  TTargets,
  TTarget,
} from '@ops/exporter/config/types';
import { writeExportsTarget } from '@ops/exporter/write/exports/target';

export const writeExportsTargets = async (
  targets: TTargets,
) => {
  const nextTargets: TTargets = [];

  try {
    for await (const target of targets) {
      const { indexRows } = await writeExportsTarget(
        target,
        targets,
      );
      const nextTarget: TTarget = {
        ...target,
        indexRows,
      };
      nextTargets.push(nextTarget);
    }
  } catch (error: TError) {
    throw Error(error);
  }
  return nextTargets;
};
