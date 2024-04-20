import { writeFile } from 'fs/promises';
import { TInternalTsPathRecord } from '@ops/exporter/config/types';
import { green } from '@ops/console';
import { prependPwd } from '@ops/utils/dirs/pwd';
import prevTsConfigPaths from '@ts/paths';
import { TError } from '@brysonandrew/config-types/dom';

export const writeWorkspacesTsPaths = async (
  workspacesTsPathRecord: TInternalTsPathRecord,
) => {
  try {
    const pathsRecord = {
      ...prevTsConfigPaths.compilerOptions.paths,
      ...workspacesTsPathRecord,
    };
  const sortedPaths =  pathsRecord;//sortByKeys(pathsRecord);

    const path = 'tsconfig.paths.json';
    const fullPath = prependPwd(path);

    const nextTsPaths = {
      ...prevTsConfigPaths,
      compilerOptions: {
        ...prevTsConfigPaths.compilerOptions,
        paths: sortedPaths,
      },
    };

    console.log(
      green(
        `✍️  workspace paths to ${path}.\n${fullPath}
        `,
      ),
    );
    await writeFile(
      fullPath,
      JSON.stringify(nextTsPaths, null, 2),
    );
    console.log(
      green(`✅ ✍️  workspace paths to ${path}
    `),
    );
  } catch (error: TError) {
    throw new Error(error);
  }
};
