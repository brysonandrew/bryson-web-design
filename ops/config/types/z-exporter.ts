import type { OutputOptions } from 'rollup';
import type { RollupTypescriptPluginOptions } from '@rollup/plugin-typescript'
export const DEFAULT_VERSION = '1.0.0';
export const DEPS_KEY = 'dependencies';
export const DEV_DEPS_KEY = 'devDependencies';
export const PEER_DEPS_KEY = 'peerDependencies';
export const KEYS = [DEPS_KEY, DEV_DEPS_KEY, PEER_DEPS_KEY];
export type TDepRecord = Record<
  (typeof KEYS)[number],
  string[]
>;
export type TPackageJson = Partial<Record<string, any>>;
export const DEFAULT_DEPS: TDepRecord = {
  [DEPS_KEY]: [],
  [DEV_DEPS_KEY]: [],
  [PEER_DEPS_KEY]: [],
};
export type TDepSectionPackageJson = Record<
  (typeof KEYS)[number],
  Record<string, string>
>;

export const DEFAULT_SCRIPTS = {
  '+': 'yarn add',
  '-': 'yarn remove',
  format:
    'yarn banner $npm_lifecycle_event && prettier --write .',
  clean:
    'yarn banner $npm_lifecycle_event && npx rimraf node_modules .next yarn-error.log',
  banner:
    'node -e "require(\'@juke/banner\')" $npm_package_name',
  lint: 'yarn banner $npm_lifecycle_event && tsc  --build . & eslint . --fix --ext ts,tsx',
};

export type TKeyType =
  | typeof DEPS_KEY
  | typeof DEV_DEPS_KEY
  | typeof PEER_DEPS_KEY;

export type TDepsReducer = Map<string, TKeyType>;

export type TOutputForRollup = Pick<
  OutputOptions,
  | 'dir'
  | 'entryFileNames'
  | 'format'
  | 'chunkFileNames'
  | 'exports'
>;

export type TOutput = Pick<OutputOptions, 'format'> & {
  ext: string;
  packageJsonExport: {
    top: string[];
    conditional: string[];
  };
};
export type TOutputConfig = {
  name: string;
  input: string;
  targetName: string;
};

export type TInput = {
  input: string;
  output: TOutputForRollup[];
  options: Partial<RollupTypescriptPluginOptions>;
};

export type TOutputResult = Pick<
  TInput,
  'input' | 'output'
> & {
  lookup?: [name: string, workspaceName: string];
  name: string;
  nameDir: string;
  targetPackageJson?: TPackageJson;
  packageJson: TPackageJson;
};

export type TInputConfig = {
  output: TOutputResult;
  options: Partial<RollupTypescriptPluginOptions>;
};

export type TResolveExportValueConfig = {
  packageJson: TPackageJson | null;
  pathKey: string;
  packageJsonExport: TPackageJson | null;
  entryPath: string;
};

export type TResolveTargetPackageJson = {
  targetToName: string;
  typesPathFromName: string;
  pathFromTarget: string;
  pathKey: string;
  packageJson?: TPackageJson | null;
  targetPackageJson?: TPackageJson | null;
  packageJsonExport?: TPackageJson | null;
  depsReducer?: TDepsReducer | null;
};
