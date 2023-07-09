import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { STATE } from './constants';
import type { TAction, TContext } from './types';
import { motionValue } from 'framer-motion';
import { EMPTY_SCREENS_LOOKUP } from '@constants/media';

export const Context = createContext<TContext>({
  ...STATE,
  randomIndicies: [],
  screensCountRecord: {},
  screensLookup: EMPTY_SCREENS_LOOKUP,
  screensLookupSmall: EMPTY_SCREENS_LOOKUP,
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  dispatch: (_: TAction) => null,
});

export const useContext = (): TContext =>
  useReactContext<TContext>(Context);
