import { useContext as useReactContext } from 'react';
import { APP } from './config/constants';
import {
  TValue,
  TStyle,
  TAppContext,
} from './config/types';

export const useApp = <S extends TStyle = TStyle>() =>
  useReactContext<TValue<S>>(APP as TAppContext<any>);
 