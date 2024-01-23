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
import { useLayoutRecord } from './layout/useLayoutRecord';
import { DEFAULT_STYLE } from './style';
import { NOOP } from '@brysonandrew/utils';
import { TLayoutRecordValue } from './layout/types';
import { once } from 'lodash';

const initContext = once(<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
>() => createContext<TValue<S>>({} as TValue<S>));

export const useApp = <
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
>() =>
  useReactContext<TValue<S>>(
    initContext<S>() as TAppContext<S>,
  );

type TProps<S extends TPartialDefaultStyle> = TAppProps<S>;
export const AppProvider = <
  S extends TPartialDefaultStyle,
>({
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

  const layoutRecord: TLayoutRecordValue =
    useLayoutRecord<TMergedStyle>(layoutConfig);

  const value: TValue<S> = {
    ...appStyle,
    ...layoutRecord,
    isInit,
    onInit,
    onSound: NOOP,
  };
  const CONTEXT = initContext<S>();

  return (
    <CONTEXT.Provider value={value}>
      {children}
    </CONTEXT.Provider>
  );
};

type TConsumerProps<S extends TPartialDefaultStyle> = {
  children(values: TValue<S>): JSX.Element;
};
export const AppConsumer = <
  S extends TPartialDefaultStyle,
>({
  children,
}: TConsumerProps<S>) => {
  const CONTEXT = initContext<S>();
  return <CONTEXT.Consumer>{children}</CONTEXT.Consumer>;
};
