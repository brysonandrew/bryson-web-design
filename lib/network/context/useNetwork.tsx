import { useContext as useReactContext } from 'react';
import { NETWORK } from './config/constants';
import { TContext } from './config/types';

export const useNetwork = (): TContext =>
  useReactContext<TContext>(NETWORK);
