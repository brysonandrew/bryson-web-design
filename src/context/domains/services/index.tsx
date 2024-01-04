import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Services = createContext<TContext>(CONTEXT);

export const useServices = (): TContext =>
  useReactContext<TContext>(Services);
