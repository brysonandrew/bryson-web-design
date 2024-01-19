import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Sound = createContext<TContext>(CONTEXT);

export const useSound = (): TContext =>
  useReactContext<TContext>(Sound);
