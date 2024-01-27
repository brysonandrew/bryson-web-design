import { useContext as useReactContext } from 'react';
import { CONTACT } from '@brysonandrew/contact/config/constants';
import { TContactContext } from '@brysonandrew/contact/config/types';

export const useContact = (): TContactContext =>
  useReactContext<TContactContext>(CONTACT);
