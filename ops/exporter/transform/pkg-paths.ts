import {
  EMPTY_TARGET,
  INIT_TS_PATH_RECORD,
  INIT_WORKSPACES,
  INTERNAL_PREFIX,
} from '@ops/exporter/config/constants';
import { TTargets } from '@ops/exporter/config/types';
import { parse } from 'path';

export const transformPkgPaths = (pkgPaths: string[]) => {
  const result = pkgPaths.reduce(
    (a, pkgPath) => {
      const record = parse(pkgPath);
      const { dir, base } = record;
      const parts = dir.split('/');
      const name = parts.slice(1).join('-');
      const subWorkspaces = pkgPaths.filter(
        (p) => p.startsWith(dir) && p !== pkgPath
      );

      const pathKey = `${INTERNAL_PREFIX}${name}`;
      const workspacePathRoot = { [pathKey]: [dir] };
      const workspacePath = {
        [`${pathKey}/*`]: [`${dir}/*`],
      };

      const nextPaths = {
        ...workspacePathRoot,
        ...workspacePath,
      };

      const tsPathsRecord =
        subWorkspaces.length === 0
          ? {
              ...nextPaths,
              ...a.tsPathsRecord,
            }
          : {
              ...a.tsPathsRecord,
              ...nextPaths,
            };

      const target = {
        ...EMPTY_TARGET,
        base,
        dir,
        name,
        workspace: dir,
        subWorkspaces,
      };

      return {
        ...a,
        targets: [...a.targets, target],
        workspaces: [...a.workspaces, dir],
        tsPathsRecord,
      };
    },
    {
      workspaces: INIT_WORKSPACES,
      tsPathsRecord: INIT_TS_PATH_RECORD,
      targets: [] as TTargets,
    }
  );
  return result;
};
