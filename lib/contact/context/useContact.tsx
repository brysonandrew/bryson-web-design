import { useContext as useReactContext } from 'react';
import { CONTACT } from './constants';
import { TContext } from './types';

export const useContact = (): TContext =>
  useReactContext<TContext>(CONTACT);
