import { useContext as useReactContext } from 'react';
import { ServicesC } from '.';
import { TContext } from './types';

export const useServicesC = (): TContext =>
  useReactContext<TContext>(ServicesC);
