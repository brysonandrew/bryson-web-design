import { TTargets } from '@ops/exporter/config/types';
import { readAllTarget } from '@ops/exporter/read/all/target';

export const readAllTargets = async (targets: TTargets) => {
  const nextTargets: TTargets = [];
  for await (const target of targets) {
    const nextTarget = await readAllTarget(target,targets);
    nextTargets.push(nextTarget);
  }
  return nextTargets;
};
