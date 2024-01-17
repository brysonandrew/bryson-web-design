import { useContext as useReactContext } from 'react';
import { SCROLL } from './constants';
import { TContext } from './types';

export const useScroll = (): TContext =>
  useReactContext<TContext>(SCROLL);
