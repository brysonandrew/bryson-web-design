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

  const [isInit, setInit] = useState(false);
  const onInit = () => setInit(true);

  useEffect(() => {
    onInit();
  }, []);

  const appStyle = mergeDeepObjects<TDefaultStyle>(
    DEFAULT_STYLE,
    style,
  );
  console.log(rest);

  const layoutConfig = {
    ...appStyle,
    ...rest,
  } as const;
  console.log(layoutConfig);

  const layoutRecord: TLayoutRecordValue =
    useLayoutRecord(layoutConfig);

  const value = {
    ...appStyle,
    ...layoutRecord,
    isInit,
    onInit,
    sounds: {},
  } as const;

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
  const CONTEXT = initContext();
  return <CONTEXT.Consumer>{children}</CONTEXT.Consumer>;
};
