import { INTERNAL_PREFIX } from '@ops/exporter/config/constants';
import {
  INIT_WORKSPACES,
  INIT_TARGETS,
  INIT_TS_PATH_RECORD,
} from '@ops/exporter/findPkgPaths/constants';
import { parse } from 'path';

export const parsePkgPaths = (pkgPaths: string[]) => {
  const result = pkgPaths.reduce(
    (a, pkgPath) => {
      const record = parse(pkgPath);
      const { dir, base } = record;
      const parts = dir.split('/');
      const name = parts.slice(1).join('-');
      const subWorkspaces = pkgPaths.filter(
        (p) => p.startsWith(dir) && p !== pkgPath,
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

      const tsPathRecord =
        subWorkspaces.length === 0
          ? {
              ...nextPaths,
              ...a.tsPathRecord,
            }
          : {
              ...a.tsPathRecord,
              ...nextPaths,
            };
      return {
        ...a,
        targets: [
          ...a.targets,
          {
            base,
            dir,
            name,
            workspace: dir,
            subWorkspaces,
          },
        ],
        workspaces: [...a.workspaces, dir],
        tsPathRecord,
      };
    },
    {
      workspaces: INIT_WORKSPACES,
      targets: INIT_TARGETS,
      tsPathRecord: INIT_TS_PATH_RECORD,
    },
  );
  return result;
};
