import { useContext as useReactContext } from 'react';
import { APP } from './config/constants';
import { TContext } from './config/types';

export const useApp = (): TContext =>
  useReactContext<TContext>(APP);
