import { useEffect, useState } from 'react';
import {
  TAppProps,
  TDefaultStyle,
  TPartialDefaultStyle,
  TValue,
} from './config/types';
import { APP } from './config/constants';
import { useLayoutRecord } from './hooks/layout/useLayoutRecord';
import { DEFAULT_STYLE } from './style';
import { NOOP } from '@brysonandrew/base';

type TProps<S extends TPartialDefaultStyle> = TAppProps<S>;
export const AppProvider = <S extends TPartialDefaultStyle>({
  children,
  style,
  ...rest
}: TProps<S>) => {
  const [isInit, setInit] = useState(false);
  const onInit = () => setInit(true);

  useEffect(() => {
    onInit();
  }, []);

  type TDefaultKey = keyof TDefaultStyle;
  type TMergedStyle = TDefaultStyle & S;

  type TEntries = [
    TDefaultKey,
    TMergedStyle[TDefaultKey],
  ][];
  const entries = Object.entries(style) as TEntries;
  const appStyle = entries.reduce(
    (a, [key, value]) => {
      const defaultValue = DEFAULT_STYLE[key];

      return { ...a, [key]: { ...defaultValue, ...value } };
    },
    { ...DEFAULT_STYLE } as TMergedStyle,
  );

  const layoutConfig = {
    ...appStyle,
    ...rest,
  } as const;

  const layoutRecord =
    useLayoutRecord<TMergedStyle>(layoutConfig);

  const value: TValue<S> = {
    ...appStyle,
    ...layoutRecord,
    isInit,
    onInit,
    onSound: NOOP,
  };

  return (
    <APP.Provider value={value}>{children}</APP.Provider>
  );
};
