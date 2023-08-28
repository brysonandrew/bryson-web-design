import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Gallery = createContext<TContext>(CONTEXT);

export const useGallery = (): TContext =>
  useReactContext<TContext>(Gallery);
