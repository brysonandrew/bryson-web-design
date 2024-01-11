import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Build = createContext<TContext>(CONTEXT);

export const useBuild = (): TContext =>
  useReactContext<TContext>(Build);
