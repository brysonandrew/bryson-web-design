import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from '@brysonandrew/color/constants';
import { TContext } from '@brysonandrew/color/types';

export const Projector = createContext<TContext>(CONTEXT);

export const useProjector = (): TContext =>
  useReactContext<TContext>(Projector);
