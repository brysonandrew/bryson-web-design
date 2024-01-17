import { useContext as useReactContext } from 'react';
import { GALLERY } from './config/constants';
import { TContext } from './config/types';

export const useGallery = (): TContext =>
  useReactContext<TContext>(GALLERY);
