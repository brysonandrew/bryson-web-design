import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Kino = createContext<TContext>(CONTEXT);

export const useKino = (): TContext =>
  useReactContext<TContext>(Kino);
