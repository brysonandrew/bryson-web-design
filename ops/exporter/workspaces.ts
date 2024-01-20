import { readFile } from '@ops/common/utils';
import { PACKAGE_JSON_NAME } from '@ops/common/types';
import { TPath } from '@ops/common/types/entries';
import { resolve } from 'path';
import { writeFile } from 'fs/promises';

export const workspaces = async (values: TPath[]) => {
  try {
    const pkgPath = resolve('.', PACKAGE_JSON_NAME);
    const pkgStr = readFile(pkgPath);
    const pkg = JSON.parse(pkgStr);

    if (!pkg) {
      console.log('no root pgk');
    }

    const pkgWithExports = {
      ...pkg,
      workspaces: values.map(({ full }) => full),
    };

    const pkgWithWorkspaces = JSON.stringify(
      pkgWithExports,
      null,
      2,
    );

    writeFile(pkgPath, pkgWithWorkspaces);
  } catch (error: any) {
    throw Error(error);
  }
};
