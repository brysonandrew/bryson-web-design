import pkg from '@pkg';
import { QUOTE_RX } from '@ops/config/constants';
import { INTERNAL_PREFIX } from '@ops/exporter/config/constants';
import { isRelative } from '@ops/utils/exporter/config';
import { TStringRecord } from '@brysonandrew/config-types';
const parentDeps: TStringRecord = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

type TConfig = {
  file: string;
  prefix: RegExp;
  name: string;
  version: string;
};
export const resolveDeps = ({
  file,
  prefix,
  name,
  version,
}: TConfig) => {
  const peerDependencies: Record<string, unknown> = {};
  const parts = file.split(prefix).slice(1);

  parts.forEach((v) => {
    if (isRelative(v)) return;

    const endRx = QUOTE_RX;
    const endIndex = v.search(endRx);

    if (endIndex > -1) {
      let lib = v.slice(0, endIndex);

      for (const excludePrefix of [
        'src/',
        'ops/',
        'lib/',
        `@app/`,
        `@uno/`,
        `@vite/`,
        '@t/',
      ])
        if (lib.startsWith(excludePrefix)) {
          console.error(
            `Invalid absolute import found: ${lib}`,
            // `File: - ${file}`,
          );
          return;
        }

      if (lib.startsWith(INTERNAL_PREFIX)) {
        const [appName, libName] = lib.split('/');
        if (name === libName) return;
        lib = [appName, libName].join('/');
      }
      peerDependencies[lib] = parentDeps[lib] ?? version;
    }
  });
  return peerDependencies;
};
