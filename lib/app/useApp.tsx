import { useContext as useReactContext } from 'react';
import { APP } from './config/constants';
import {
  TValue,
  TDefaultStyle,
  TAppContext,
} from './config/types';

export const useApp = <
  S extends TDefaultStyle = TDefaultStyle,
>() =>
  useReactContext<TValue<S>>(
    APP as unknown as TAppContext<S>,
  );
