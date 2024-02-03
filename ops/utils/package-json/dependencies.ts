import path from 'path';
import { resolveFiles, readFile } from '../files/resolve';
import test from '../../../package.json';
import {
  IMPORT_LINE_TYPE_RX,
  IMPORT_LINE_VALUE_RX,
  EXTRACT_DEP_RX,
} from '../import-export';
import { TDepsReducer, DEV_DEPS_KEY, DEPS_KEY, PEER_DEPS_KEY, DEFAULT_DEPS, TKeyType, TDepRecord, TDepSectionPackageJson } from '@ops/config/types/z-exporter';

const MISSING_PEER_DEPS_LOOKUP = {
  '@apollo/client': 'graphql',
  '@typescript-eslint/eslint-plugin': 'eslint',
  '@typescript-eslint/parser': 'eslint',
  'eslint-config-next': 'next',
  'framer-motion': 'react-dom',
  'styled-components': ['react-dom', 'react-is'],
  next: 'react-dom',
};

type TMissingPeerDepsLookup =
  typeof MISSING_PEER_DEPS_LOOKUP;

const extractDep = (importLine: string) =>
  EXTRACT_DEP_RX.exec(importLine)?.[0] || null;

export const resolveDeps = (dir: string): TDepsReducer => {
  const files = resolveFiles(dir, '[!.d].*(ts|tsx)');
  const init = [DEV_DEPS_KEY, DEPS_KEY, PEER_DEPS_KEY].map(
    (key: string) => [
      key,
      new Set<string>(DEFAULT_DEPS[key as TKeyType]),
    ],
  );
  const depCollector = new Map<TKeyType, Set<string>>(
    init as any,
  );

  const addDep = (key: TKeyType, dep: string) => {
    depCollector.set(
      key,
      (depCollector.get(key) as Set<string>).add(dep),
    );
  };

  const addToMap = (
    key: TKeyType,
    dep: string | null,
    rx: RegExp,
  ): null | void => {
    if (!dep) return null;
    let value = dep.replace(rx, '');
    if (value.slice(0, 2).includes('@')) {
      if (value.includes('@juke')) {
        return null;
      } else {
        value = value.split('/').slice(0, 2).join('/');
      }
    } else if (value.includes('/')) {
      value = value.split('/')[0];
    }
    const missingDep: undefined | string | string[] =
      MISSING_PEER_DEPS_LOOKUP[
        value as keyof TMissingPeerDepsLookup
      ];
    if (missingDep) {
      if (Array.isArray(missingDep)) {
        missingDep.forEach((dep: string) => {
          addDep(PEER_DEPS_KEY, dep);
        });
      } else {
        addDep(PEER_DEPS_KEY, missingDep);
      }
    }
    addDep(key, value);
  };
  const addToDevDeps = (dep: string | null): void => {
    if (dep)
      addToMap(
        PEER_DEPS_KEY,
        dep,
        /(import type .+ from |")/g,
      ); // make everything peer dep for now
  };
  const addToDeps = (dep: string | null): void => {
    if (dep)
      addToMap(PEER_DEPS_KEY, dep, /(import .+ from |")/g);
  };

  files
    .map((file) => path.join(dir, file))
    .forEach((file) => {
      const data = readFile(file);
      const devDepsFromContent = [];
      if (/process\.\w+/g.test(data)) {
        devDepsFromContent.push('@types/node');
      }
      const devDepsFromImports = (
        data.match(IMPORT_LINE_TYPE_RX) || []
      )
        .map(extractDep)
        .filter(Boolean);
      const deps = (data.match(IMPORT_LINE_VALUE_RX) || [])
        .map(extractDep)
        .filter(Boolean);
      [
        ...devDepsFromContent,
        ...devDepsFromImports,
      ].forEach(addToDevDeps);
      deps.forEach(addToDeps);
    });
  const depsReducer: TDepsReducer = new Map<
    string,
    TKeyType
  >();

  depCollector.forEach(
    (value: Set<string>, key: TKeyType) => {
      value.forEach((value) => {
        depsReducer.set(value, key);
      });
    },
  );
  return depsReducer;
};

export const mergeDeps = (
  depsReducer: TDepsReducer | null,
  name?: string,
) => {
  const result: TDepRecord = {};
  if (depsReducer === null) return result;
  const dirName = name ? ` for ${name}` : '';
  if (depsReducer.size === 0) {
    return result;
    // console.log(`\u001b[2mno deps found${dirName}\u001b[0m`);
  } else {
    const mainDeps: TDepSectionPackageJson = {
      [DEPS_KEY]: { ...test[DEPS_KEY] },
      [DEV_DEPS_KEY]: { ...test[DEV_DEPS_KEY] },
      [PEER_DEPS_KEY]: {
        ...((test as Record<any, any>)[PEER_DEPS_KEY] ||
          {}),
      },
    };

    for (const [depName, depKey] of depsReducer[
      Symbol.iterator
    ]()) {
      result[depKey] = {
        ...result[depKey],
        [depName]:
          mainDeps?.[depKey]?.[depName] ||
          mainDeps?.[PEER_DEPS_KEY]?.[depName] ||
          mainDeps?.[PEER_DEPS_KEY]?.[depName] ||
          mainDeps?.[PEER_DEPS_KEY]?.[depName] ||
          '*',
      };
    }
    console.log(
      `\u001b[2m${depsReducer.size} deps found${dirName}\u001b[0m`,
    );
    for (const [key, value] of depsReducer.entries()) {
      console.log(
        `\u001b[3m  ¤ added "${key}" to ${value}\u001b[0m`,
      );
    }
  }

  return result;
};
