import type { TContext } from './types';
import { NOOP } from '@brysonandrew/base/constants/functions';
import { createContext } from 'react';

export const CONTEXT: TContext = {
  context: new AudioContext(),
  isSound: false,
  toggleSound: NOOP,
};

export const SOUND = createContext(CONTEXT);
