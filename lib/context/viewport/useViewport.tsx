
import { useContext as useReactContext } from 'react';
import { VIEWPORT } from './constants';
import { TContext } from './types';

export const useViewport = (): TContext =>
  useReactContext<TContext>(VIEWPORT);
