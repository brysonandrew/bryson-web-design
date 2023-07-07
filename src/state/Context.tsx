import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { STATE } from './constants';
import type { TAction, TContext } from './types';
import { motionValue } from 'framer-motion';

export const Context = createContext<TContext>({
  ...STATE,
  screensCountRecord: {},
  screensRecord: {},
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  dispatch: (_: TAction) => null,
});

export const useContext = (): TContext =>
  useReactContext<TContext>(Context);
