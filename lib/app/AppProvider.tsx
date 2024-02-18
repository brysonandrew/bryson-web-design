import {
  createContext,
  useContext as useReactContext,
} from 'react';
import {
  TAppContext,
  TAppProviderProps,
  TPartialDefaultStyle,
  TValue,
} from '@brysonandrew/app/config/types';
import { once } from '@brysonandrew/utils-function';

const initContext = once(<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
>() => createContext<TValue<S>>({} as TValue<S>));

export const useApp = <
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
>() =>
  useReactContext<TValue<S>>(
    initContext() as TAppContext<S>,
  );

export const AppProvider = <
  S extends TPartialDefaultStyle,
>({
  children,
  ...value
}: TAppProviderProps<S>) => {
  const CONTEXT = initContext();

  return (
    <CONTEXT.Provider value={value}>
      {children}
    </CONTEXT.Provider>
  );
};
