import { useContext as useReactContext } from 'react';
import { CONTACT } from './constants';
import { TContactContext } from './types';

export const useContact = (): TContactContext =>
  useReactContext<TContactContext>(CONTACT);
