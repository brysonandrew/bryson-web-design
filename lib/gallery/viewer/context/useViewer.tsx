import { useContext as useReactContext } from 'react';
import { VIEWER } from './constants';
import { TContext } from './types';

export const useViewer = (): TContext =>
  useReactContext<TContext>(VIEWER);
