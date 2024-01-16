import { useContext as useReactContext } from 'react';
import { APP } from './config/constants';
import { TValue, TContext, TStyle } from './config/types';

export const useApp = <
  S extends TStyle = TStyle,
>(): TValue<S> =>
  useReactContext<TValue<S>>(APP as unknown as TContext<S>);
