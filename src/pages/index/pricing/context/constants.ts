import { NOOP } from '@brysonandrew/base/constants/functions';
import type { TContext } from './types';

export const CONTEXT: TContext = {
  extras: {},
  setExtras: NOOP,
};
