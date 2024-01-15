import type { TContext } from './types';
import { NOOP } from '@lib/constants/functions';
import { createContext } from 'react';

const INIT: TContext = {
  isOffline: false,
  onOffline: NOOP,
  onOnline: NOOP,
};

export const NETWORK = createContext<TContext>(INIT);
