import { PACKAGE_JSON_NAME } from '@ops/common/types';
import { ensureDirSync } from 'fs-extra';
import path from 'path';
import { resolveFile } from '../dirs/main';
import { readFile } from '../files';
import { makeFile } from '../files/add';

export const resolvePrevPackageJson = (rootPath: string) =>
  resolveFile(path.join(rootPath));
export const packageJsonPath = (dir: string) =>
  path.join(dir, PACKAGE_JSON_NAME);

const addPackageJson = (
  nameDir: string,
  packageJson: Record<string, any>,
) => {
  ensureDirSync(nameDir);
  makeFile(
    packageJsonPath(nameDir),
    JSON.stringify(packageJson, null, 2),
  );
};

export const initWorkspaces = (map: Map<string, any>) => {
  const root = process.env.PROJECT_CWD;
  const rootPackageJsonPath = path.join(
    root || '',
    PACKAGE_JSON_NAME,
  );
  const rootPackageString = readFile(rootPackageJsonPath);
  const rootPackageJson = JSON.parse(rootPackageString);
  const nextWorkspaces = new Set<string>();

  for (const [dir, packageJson] of map[Symbol.iterator]()) {
    addPackageJson(dir, packageJson);
    const name = packageJson?.name;
    const packageDir = name ? ` for ${name}` : '';
    console.log(
      `\u001b[2madded ${PACKAGE_JSON_NAME}${packageDir} at ${dir}\u001b[0m`,
    );
    nextWorkspaces.add(dir.replace(`${root}/`, ''));
  }

  if (nextWorkspaces.size > 0) {
    rootPackageJson.workspaces = [
      ...nextWorkspaces.values(),
    ];
    makeFile(
      rootPackageJsonPath,
      JSON.stringify(rootPackageJson, null, 2),
    );
    console.log(
      `\u001b[2m Added supplimentary workspaces... 
        \n ╔ ${rootPackageJson.workspaces.join(
          '\n ╠ ',
        )} \n ╚\u001b[0m\u001b[4m Are your current workspaces listed in your root ${PACKAGE_JSON_NAME} \u001b[0m`,
    );
  }
};

export const removeLibWorkspaces = () => {
  const root = process.env.PROJECT_CWD;
  const rootPackageJsonPath = path.join(
    root || '',
    PACKAGE_JSON_NAME,
  );
  const rootPackageString = readFile(rootPackageJsonPath);
  const rootPackageJson = JSON.parse(rootPackageString);
  makeFile(
    rootPackageJsonPath,
    JSON.stringify(rootPackageJson, null, 2),
  );
  console.log(
    `\u001b[2m Removed supplimentary workspaces... 
       \n ╔ ${[].join(
         '\n ╠ ',
       )} \n ╚\u001b[0m\u001b[6m Are your current workspaces listed in your root ${PACKAGE_JSON_NAME} \u001b[0m`,
  );
};
