import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from '@brysonandrew/color/constants';
import { TContext } from '@brysonandrew/color/types';

export const Screen = createContext<TContext>(CONTEXT);

export const useScreen = (): TContext =>
  useReactContext<TContext>(Screen);
