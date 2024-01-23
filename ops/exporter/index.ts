import { TTargets } from '@brysonandrew/exporter/config/types';
import { find } from './find';
import { init } from './init';
import { process } from './process';
import { workspaces } from './workspaces';
import { parse } from 'path';

(async () => {
  try {
    const workspacePath = init();
    const pkgPaths = await find(workspacePath);
    const targets: TTargets = pkgPaths.map((pkgPath) => {
      const record = parse(pkgPath);
      const { dir, base } = record;
      const parts = dir.split('/');
      const name = parts.slice(1).join('-');
      const workspace = `${parts[0]}/${name}`;
      return {
        base,
        dir,
        name,
        workspace,
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
