import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Screen = createContext<TContext>(CONTEXT);

export const useScreen = (): TContext =>
  useReactContext<TContext>(Screen);
