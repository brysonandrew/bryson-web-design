import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { STATE } from './constants';
import type { TAction, TContext } from './types';

export const Context = createContext<TContext>({
  ...STATE,
  screensCountRecord: {},
  screensRecord: {},
  dispatch: (_: TAction) => null,
});

export const useContext = (): TContext =>
  useReactContext<TContext>(Context);
