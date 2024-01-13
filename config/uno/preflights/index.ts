import { RESET } from './reset';
import { resolveScrollbar } from '@uno/preflights/resolveScrollbar';
import { resolveInput } from './resolveInput';
import { TTheme } from '@uno/theme';
import type { Preflight } from 'unocss';

export const PRE_FLIGHTS: Preflight<TTheme>[] = [
  {
    layer: 'reset',
    getCSS: () => RESET,
  },
  {
    getCSS: resolveInput,
  },
  {
    getCSS: resolveScrollbar,
  },
  
];
