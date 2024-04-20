import { TTargets } from '@ops/exporter/config/types';
import { readSubWorkspacesTarget } from '@ops/exporter/read/sub-workspaces/target';
import { green } from '@ops/console';

export const readSubWorkspacesTargets = async (
  targets: TTargets
) => {
  const nextTargets: TTargets = [];
  for await (const target of targets) {
    green(`Writing exports for ${target.name}`);
    const { indexRows, peerDependencies } =
      await readSubWorkspacesTarget(
        target.subWorkspaces
      );
    const nextTarget = {
      ...target,
      indexRows: [...target.indexRows, ...indexRows],
      peerDependencies: {
        ...target.peerDependencies,
        ...peerDependencies,
      },
    };
    nextTargets.push(nextTarget);
  }
  return nextTargets;
};
