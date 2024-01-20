import { useContext as useReactContext } from 'react';
import { SCROLL } from './constants';
import { TScrollContext } from './types';

export const useScroll = (): TScrollContext =>
  useReactContext<TScrollContext>(SCROLL);
