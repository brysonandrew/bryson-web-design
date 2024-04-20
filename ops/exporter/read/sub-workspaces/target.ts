import { readFile } from 'fs/promises';
import { QUOTE_JSON } from '@ops/config/constants';
import { TStringRecord } from '@brysonandrew/config-types/object';

export const readSubWorkspacesTarget = async (
  subWorkspaces: string[],
) => {
  let peerDependencies: TStringRecord = {};
  let indexRows: string[] = [];
  for await (const subWorkspace of subWorkspaces) {
    const subWorkspacePkgStr = await readFile(
      subWorkspace,
      { encoding: 'utf-8' },
    );
    const subWorkspacePkg = JSON.parse(subWorkspacePkgStr);
    const subWorkspacePkgName = subWorkspacePkg.name;

    indexRows = [
      ...indexRows,
      `export * from ${QUOTE_JSON}${subWorkspacePkgName}${QUOTE_JSON};`,
    ];

    peerDependencies = {
      ...peerDependencies,
      [subWorkspacePkg.name]: '*',
    };
  }


  return { indexRows, peerDependencies };
};
