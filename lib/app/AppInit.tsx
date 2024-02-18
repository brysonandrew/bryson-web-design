import {
  createContext,
  useContext as useReactContext,
} from 'react';
import {
  TAppContext,
  TAppInitProps,
  TDefaultStyle,
  TPartialDefaultStyle,
  TValue,
} from '@brysonandrew/app/config/types';
import { once } from '@brysonandrew/utils-function';
import { useAppStyle } from '@brysonandrew/app/useAppStyle';
import { useInit } from '@brysonandrew/app/useInit';
import {
  DEFAULT_LAYOUT,
  DEFAULT_SOUNDS,
} from '@brysonandrew/app/config/constants';

const initContext = once(<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
>() => createContext<TValue<S>>({} as TValue<S>));

export const useApp = <
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
>() =>
  useReactContext<TValue<S>>(
    initContext() as TAppContext<S>,
  );

type TProps<S extends TPartialDefaultStyle> =
  TAppInitProps<S>;
export const AppInit = <S extends TPartialDefaultStyle>({
  children,
  style,
  ...rest
}: TProps<S>) => {
  const initState = useInit();
  const appStyle: S & TDefaultStyle = useAppStyle({
    style,
  });

  const value = {
    ...DEFAULT_LAYOUT,
    ...DEFAULT_SOUNDS,
    initState,
    ...appStyle,
    ...rest,
  } as const;

  //console.log(children,value)
  const r = children(value);
  console.log(r);
  return <>{r}</>;
};
