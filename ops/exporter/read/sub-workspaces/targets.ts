import { TTargets } from '@ops/exporter/config/types';
import { readSubWorkspacesTarget } from '@ops/exporter/read/sub-workspaces/target';

export const readSubWorkspacesTargets = async (
  targets: TTargets
) => {
  const nextTargets: TTargets = [];
  for await (const target of targets) {
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
