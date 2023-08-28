import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Contact = createContext<TContext>(CONTEXT);

export const useContact = (): TContext =>
  useReactContext<TContext>(Contact);
