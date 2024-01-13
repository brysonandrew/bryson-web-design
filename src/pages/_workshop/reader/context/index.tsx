import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Reader = createContext<TContext>(CONTEXT);

export const useReader = (): TContext =>
  useReactContext<TContext>(Reader);
