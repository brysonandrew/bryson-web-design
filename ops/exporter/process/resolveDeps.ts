import { isRelative } from '@ops/common/utils/exporter/config';
import { QUOTE_RX } from '../config/constants';

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
      if (lib.startsWith('lib/')) {
        console.error(
          `Invalid absolute import found: ${lib}`,
          `File: - ${file}`,
        );
        return;
      }
      if (lib.startsWith('@brysonandrew/')) {
        const [appName, libName] = lib.split('/');
        if (name === libName) return;
        lib = [appName, libName].join('/');
      }
      peerDependencies[lib] = version;
    }
  });
  return peerDependencies;
};
