import { PACKAGE_JSON_NAME } from '@brysonandrew/exporter/config/constants';
import { readFile } from '@ops/common/utils';
import { writeFile } from 'fs/promises';
import { resolve } from 'path';
const EXTERNAL = '';

export const workspaces = async (dirPaths: string[]) => {
  try {
    const pkgPath = resolve('.', PACKAGE_JSON_NAME);
    const pkgStr = readFile(pkgPath);
    const pkg = JSON.parse(pkgStr);

    if (!pkg) {
      console.log('no root pgk');
    }

    const pkgWithExports = {
      ...pkg,
      workspaces: [EXTERNAL, ...dirPaths].filter(Boolean),
    };

    const pkgWithWorkspaces = JSON.stringify(
      pkgWithExports,
      null,
      2,
    );
    console.log(pkgPath);

    await writeFile(pkgPath, pkgWithWorkspaces);
  } catch (error: any) {
    throw Error(error);
  }
};
