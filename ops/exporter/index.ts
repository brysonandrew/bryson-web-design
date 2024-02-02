import { TTargets } from '@brysonandrew/exporter/config/types';
import { find } from './find';
import { init } from './init';
import { parse } from 'path';
import { workspaces } from '@ops/exporter/workspaces';
import { process } from '@ops/exporter/process';

(async () => {
  try {
    const workspacePath = init();
    const pkgPaths = await find(workspacePath);
    const targets: TTargets = pkgPaths.map((pkgPath) => {
      const record = parse(pkgPath);
      const { dir, base } = record;
      const parts = dir.split('/');
      const name = parts.slice(1).join('-');
      const subWorkspaces = pkgPaths.filter(
        (p) => p.startsWith(dir) && p !== pkgPath,
      );

      return {
        base,
        dir,
        name,
        workspace: dir,
        subWorkspaces,
      };
    });
    await workspaces(
      targets.map(({ workspace }) => workspace),
    );
    process(targets);
  } catch (error) {
    console.log('Exporter - something went wrong: ', error);
  }
})();
