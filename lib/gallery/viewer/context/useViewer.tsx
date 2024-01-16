import { useContext as useReactContext } from 'react';
import { VIEWER } from './constants';
import { TContext } from './types';

export const useGallery = (): TContext =>
  useReactContext<TContext>(VIEWER);
