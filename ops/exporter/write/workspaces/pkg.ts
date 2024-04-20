import { writeFile } from 'fs/promises';
import { PACKAGE_JSON_NAME } from '@ops/config/constants';
import { green } from '@ops/console';
import { prependPwd } from '@ops/utils/dirs/pwd';
import pkg from '@pkg';

export const writeWorkspacesPkg = async (
  workspaces: string[],
) => {
  try {
    const path = PACKAGE_JSON_NAME;
    if (!pkg) {
      console.log('no root pgk');
    }

    const pkgWithExports = {
      ...pkg,
      workspaces,
    };

    const fullPath = prependPwd(path);
    console.log(
      green(`✍️  workspaces to ${path}.\n${fullPath}
    `),
    );
    await writeFile(
      fullPath,
      JSON.stringify(pkgWithExports, null, 2),
    );
    console.log(
      green(`✅ ✍️  workspaces to ${path}
    `),
    );
  } catch (error: any) {
    throw Error(error);
  }
};
