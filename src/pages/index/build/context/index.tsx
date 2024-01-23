import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { TContext } from './types';

export const Build = createContext<TContext>(
  {} as TContext,
);

export const useBuild = (): TContext =>
  useReactContext<TContext>(Build);
