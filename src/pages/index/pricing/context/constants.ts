import { NOOP } from 'lib/constants/functions';
import type { TContext } from './types';

export const CONTEXT: TContext = {
  extras: {},
  setExtras: NOOP,
};
