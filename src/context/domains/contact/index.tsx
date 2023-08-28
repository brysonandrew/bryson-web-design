import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Contact = createContext<TContext>(CONTEXT);

export const useContext = (): TContext =>
  useReactContext<TContext>(Contact);
