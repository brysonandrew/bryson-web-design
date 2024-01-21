import glob from 'fast-glob';
import { ISOMORPHIC_TARGETS, OUTPUT } from './constants';
import type {
  TDepsReducer,
  TOutput,
  TOutputConfig,
  TOutputForRollup,
  TOutputResult,
  TPackageJson,
  TResolveExportValueConfig,
  TResolveTargetPackageJson,
} from '../../types/z-exporter';
import path from 'path';
import { removeTail } from '../entries';
// import { mergeDeps, resolveDeps } from "../package-json/dependencies";
import { INDEX_BASENAME } from '../constants';

const DEFAULT_TYPES = './types/index.ts';
export const DEFAULT_IGNORE = [
  'node_modules',
  'node_modules/**',
  '**/node_modules',
  './node_modules/**/*',
  '.__outDir',
  './__ops-cache',
  '**/cjs/**/*{.d.ts,.cjs}',
  '**/es/**/*{.d.ts,.mjs}',
];
type TConfig = {
  ext: string;
  ignore: string[];
};
const DEFAULT_CONFIG: TConfig = {
  ext: '{*.ts,*.tsx,index.json}',
  ignore: [
    ...DEFAULT_IGNORE,
    path.join('**', DEFAULT_TYPES),
  ],
};

const CONFIG: Record<string, TConfig> = {
  api: {
    ext: `{*.graphql,${path.join(
      '**',
      DEFAULT_TYPES,
    )},index.json,**/package/*.ts}`,
    ignore: [...DEFAULT_IGNORE],
  },
};

export const resolveBasicPackageJsonInfo = (
  name: string,
) => ({
  name,
  version: '1.0.0',
  sideEffects: false,
});

type TResolveInputsConfig = {
  cwd: string;
  dir: string;
  ignore?: string[];
};
export const resolveInputs = ({
  cwd = '',
  dir = '',
  ignore = [],
}: TResolveInputsConfig): [
  inputs: string[],
  pattern: string,
] => {
  const { ext, ignore: configIgnore } =
    CONFIG[dir] || DEFAULT_CONFIG;
  const pattern = `./**/*${ext}`;
  return [
    glob.sync(pattern, {
      cwd,
      ignore: [...configIgnore, ...ignore],
    }),
    pattern,
  ];
};

const mergeKeyValues = (
  keys: string[],
  entryPath: string,
) =>
  (keys || []).reduce(
    (entries: Record<string, string>, key: string) => {
      entries[key] = `./${entryPath}`;
      return entries;
    },
    {},
  );

const resolveExportValue = ({
  packageJson,
  pathKey,
  packageJsonExport,
  entryPath,
}: TResolveExportValueConfig) => {
  const init = packageJson?.exports?.[pathKey];
  const next = packageJsonExport?.conditional;
  if (!init && !next) {
    return `./${entryPath}`;
  } else {
    return {
      ...((typeof init === 'string' ? {} : init) || {}),
      ...mergeKeyValues(next, entryPath),
    };
  }
};

type TResolvePackageJsonConfig = {
  packageJson?: TPackageJson | null;
  packageJsonExport?: TPackageJson | null;
  pathFromName: string;
  typesPathFromName: string;
};
const resolvePackageJson = ({
  packageJson = null,
  packageJsonExport = null,
  pathFromName,
  typesPathFromName,
}: TResolvePackageJsonConfig) => ({
  ...(packageJson || {}),
  ...mergeKeyValues(packageJsonExport?.top, pathFromName),
  exports: {
    ...(packageJson?.exports || {}),
    '.': resolveExportValue({
      packageJson,
      pathKey: '.',
      packageJsonExport,
      entryPath: pathFromName,
    }),
  },
  typesVersions: {
    '*': { '.': [`./${typesPathFromName}`, DEFAULT_TYPES] },
  },
});

const resolveTargetPackageJson = ({
  targetToName,
  typesPathFromName,
  pathFromTarget,
  pathKey,
  packageJson = null,
  targetPackageJson = null,
  packageJsonExport = null,
  depsReducer = null,
}: TResolveTargetPackageJson) => ({
  ...(Boolean(targetToName)
    ? {
        targetPackageJson: {
          ...mergeTargetPackageJson({
            targetPackageJson,
            nextExports: {
              [pathKey]: resolveExportValue({
                packageJson,
                pathKey,
                packageJsonExport,
                entryPath: pathFromTarget,
              }),
            },
            nextTypesVersions: {
              [pathKey]: [
                `./${path.join(
                  targetToName,
                  typesPathFromName,
                )}`,
                `./${path.join(
                  targetToName,
                  DEFAULT_TYPES,
                )}`,
              ],
            },
            depsReducer,
          } as TResolveMergeTargetPackageJson),
        },
      }
    : {}),
});

export const resolveOutput = ({
  targetName,
  name,
  input,
}: TOutputConfig): TOutputResult => {
  const targetBuffer = '';
  const nameDir = removeTail({
    fromDir: name,
    filePath: input,
  });
  const targetDir = removeTail({
    fromDir: targetName,
    filePath: input,
  });
  const targetToName = nameDir
    .replace(targetDir, '')
    .slice(1);
  const workspace = path
    .join(targetName, targetToName)
    .replace(/\//g, '-');

  // const depsReducer: TDepsReducer = resolveDeps(nameDir);
  const isTargetConfig = workspace === targetName;

  const dirFromName = isTargetConfig ? targetBuffer : '';
  const { base, ext } = path.parse(input);
  const typesPathFromName = [
    '.ts',
    '.tsx',
    '.mts',
    '.d.ts',
  ].includes(ext)
    ? base
    : INDEX_BASENAME;
  const workspaceName = `@brysonandrew/${workspace}`;
  const pathKey = `./${workspace}`;
  let pathFromName = path.join(dirFromName, base);
  const pathFromTarget = path.join(
    isTargetConfig ? targetBuffer : '',
    targetToName,
    base,
  );
  const originDir = path.join(
    isTargetConfig ? targetDir : nameDir,
  );

  const init: TOutputResult = {
    name: workspace,
    input,
    nameDir,
    packageJson: {
      ...resolveBasicPackageJsonInfo(workspaceName),
      main: `./${pathFromName}`,
      ...resolvePackageJson({
        pathFromName,
        typesPathFromName,
      }),
      // ...mergeDeps(depsReducer, name),
    },
    ...resolveTargetPackageJson({
      targetToName,
      typesPathFromName,
      pathFromTarget,
      pathKey,
      // depsReducer,
    }),
    output: [],
  };

  if (ISOMORPHIC_TARGETS.includes(targetName)) {
    return OUTPUT.reduce(
      (
        config: TOutputResult,
        { format, ext, packageJsonExport }: TOutput,
      ) => {
        const { output, packageJson, targetPackageJson } =
          config;
        const entryFileNames = `index.${ext}`;
        const pathTail = path.join(
          format || '',
          entryFileNames,
        );
        pathFromName = path.join(dirFromName, pathTail);
        const dir = path.join(
          originDir,
          dirFromName,
          format || '',
        );

        const nextOutput: TOutputForRollup = {
          dir,
          entryFileNames,
          format,
          exports: 'named',
        };
        return {
          ...config,
          output: [...output, nextOutput],
          packageJson: resolvePackageJson({
            packageJson,
            packageJsonExport,
            pathFromName,
            typesPathFromName,
          }),
          ...resolveTargetPackageJson({
            targetToName,
            typesPathFromName,
            pathFromTarget,
            targetPackageJson,
            pathKey,
            packageJson,
            packageJsonExport,
          }),
        };
      },
      { ...init },
    );
  } else {
    return init;
  }
};

const mergeTypesVersions = (
  packageJson: TPackageJson | null,
  nextTypesVersions: Record<string, string>,
) => {
  const currentTypesVersions =
    packageJson?.typesVersions || {};
  return {
    ...currentTypesVersions,
    '*': {
      ...(currentTypesVersions?.['*'] || {}),
      ...nextTypesVersions,
    },
  };
};

const mergeExports = (
  packageJson: TPackageJson | null,
  nextExports: Record<string, string>,
) => {
  const currentExports = packageJson?.exports || {};
  return {
    ...currentExports,
    ...nextExports,
  };
};

type TResolveMergeTargetPackageJson = {
  targetPackageJson: TPackageJson | null;
  nextExports: Record<string, any>;
  nextTypesVersions: Record<string, any>;
  depsReducer?: TDepsReducer | null;
};
export const mergeTargetPackageJson = ({
  targetPackageJson,
  nextExports,
  nextTypesVersions,
  depsReducer = null,
}: TResolveMergeTargetPackageJson) => ({
  ...targetPackageJson,
  exports: mergeExports(targetPackageJson, nextExports),
  typesVersions: mergeTypesVersions(
    targetPackageJson,
    nextTypesVersions,
  ),
  // ...mergeDeps(depsReducer, targetPackageJson?.name),
});

type TCreateLibLookupParams = {
  isTargetConfig: boolean;
  name: string;
  workspaceName: string;
};
export const createLibLookup = ({
  isTargetConfig,
  name,
  workspaceName,
}: TCreateLibLookupParams) =>
  isTargetConfig
    ? {}
    : {
        lookup: [
          name.replace(/[a-z]+(-|\b)/g, (v: string) =>
            `${v.slice(0, 1).toUpperCase()}${v
              .slice(1)
              .toLowerCase()}`.replace(/-/g, ''),
          ),
          workspaceName,
        ],
      };

export const isRelative = (path: string) =>
  /[./]/.test(path.slice(0, 2));
