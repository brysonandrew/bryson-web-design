import {
  useEffect,
  useState,
  createContext,
  useContext as useReactContext,
} from 'react';
import {
  TAppContext,
  TAppProps,
  TDefaultStyle,
  TPartialDefaultStyle,
  TValue,
} from '@brysonandrew/app/config/types';
import { useLayoutRecord } from './useLayoutRecord';
import { DEFAULT_STYLE } from './config/constants/style';
import { TLayoutRecordValue } from './config/types/layout';
import { once } from '@brysonandrew/utils-function';
import { mergeDeepObjects } from '@brysonandrew/utils-object';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { useAppStyle } from '@brysonandrew/app/useAppStyle';
import { useInit } from '@brysonandrew/app/useInit';

const initContext = once(<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
>() => createContext<TValue<S>>({} as TValue<S>));

export const useApp = <
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
>() =>
  useReactContext<TValue<S>>(
    initContext() as TAppContext<S>,
  );

type TProps<S extends TPartialDefaultStyle> = TAppProps<S>;
export const AppProvider = <
  S extends TPartialDefaultStyle,
>({
  children,
  style,
  ...rest
}: TProps<S>) => {
  const CONTEXT = initContext();

  const initState = useInit();
  const appStyle = useAppStyle({ style });

  const layoutConfig = {
    ...appStyle,
    ...rest,
  } as const;

  const layoutRecord: TLayoutRecordValue =
    useLayoutRecord(layoutConfig);

  const value = {
    initState,
    sounds: {},
    ...appStyle,
    ...layoutRecord,
  } as const;

  return (
    <CONTEXT.Provider value={value}>
      {children}
    </CONTEXT.Provider>
  );
};
