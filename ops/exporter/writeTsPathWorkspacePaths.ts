import { writeFile } from 'fs/promises';
import { TInternalTsPathRecord } from '@ops/exporter/config/types';
import { TError } from '@brysonandrew/config';
import { green } from '@ops/console';
import { prependPwd } from '@ops/utils/dirs/pwd';
import prevTsConfigPaths from '@ts/paths';

export const writeTsPathWorkspacePaths = async (
  workspacesTsPathRecord: TInternalTsPathRecord,
) => {
  try {
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
