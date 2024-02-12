import glob from 'fast-glob';
import { writeFile } from 'fs/promises';
import { TError } from '@brysonandrew/config';
import { prependPwd } from '@ops/utils/dirs/pwd';
import prevTsConfigPaths from '@ts/paths';

export const resolveTsPaths = async () => {
  try {
    const paths = await glob(
      ['(src|config)/**(!node_*)', 'src/pages/_workshop'],
      {
        deep: 2,
        onlyDirectories: true,
      },
    );

    const workspacesTsPathRecord = paths.reduce(
      (a, path) => {
        const parts = path.split('/');
        if (parts.length < 2) return a;
        const last = parts[parts.length - 1];
        const pathKey = `@${last}`;
        const workspacePathRoot = { [pathKey]: [path] };
        const workspacePath = {
          [`${pathKey}/*`]: [`${path}/*`],
        };

        const nextPaths = {
          ...workspacePathRoot,
          ...workspacePath,
        };

        return { ...a, ...nextPaths };
      },
      {} as Record<string, string[]>,
    );

    const path = 'tsconfig.paths.json';
    const fullPath = prependPwd(path);

    const nextTsPaths = {
      ...prevTsConfigPaths,
      compilerOptions: {
        ...prevTsConfigPaths.compilerOptions,
        paths: {
          ...prevTsConfigPaths.compilerOptions.paths,
          ...workspacesTsPathRecord,
        },
      },
    };

    await writeFile(
      fullPath,
      JSON.stringify(nextTsPaths, null, 2),
    );
  } catch (error: TError) {
    throw new Error(error);
  }
};

resolveTsPaths();
