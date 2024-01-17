import { useContext as useReactContext } from 'react';
import { CURSOR } from './constants';
import { TContext } from './types';

export const useCursor = (): TContext =>
  useReactContext<TContext>(CURSOR);
