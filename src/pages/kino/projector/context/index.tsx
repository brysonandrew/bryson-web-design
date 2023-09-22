import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Projector = createContext<TContext>(CONTEXT);

export const useProjector = (): TContext =>
  useReactContext<TContext>(Projector);
