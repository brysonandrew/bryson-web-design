import type { TOutput } from '../../types/exporter';
import { CACHE_BASE_NAME } from '../constants';
export const CACHE_EXPORTER_NAME = `${CACHE_BASE_NAME}/exporter`;
export const OUT_DIR = '';

export const OUTPUT: TOutput[] = [
  {
    format: 'cjs',
    ext: 'cjs',
    packageJsonExport: {
      top: ['main'],
      conditional: ['require', 'default'],
    },
  },
  {
    format: 'es',
    ext: 'mjs',
    packageJsonExport: {
      top: ['module'],
      conditional: ['import'],
    },
  },
];

export const ISOMORPHIC_TARGETS = [];
