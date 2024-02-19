import { readFile } from 'fs/promises';
import { QUOTE_JSON } from '@ops/config/constants';
import { parse, join } from 'path';

export const processParentTarget = async (
  subWorkspacePaths: string[],
) => {
  let peerDependencies: Record<string, unknown> = {};
  let indexRows: string[] = [];
  for await (const subWorkspacePath of subWorkspacePaths) {
    const subWorkspacePkgStr = await readFile(
      subWorkspacePath,
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

  const ignore = subWorkspacePaths.map((value) => {
    const subWorkspace = parse(value);
    const dirParts = subWorkspace.dir.split('/');
    const last = dirParts[dirParts.length - 1];
    const next = join(last, '**/*');
    return next;
  });

  return { indexRows, peerDependencies, ignore };
};
