import {
  createContext,
  useContext as useReactContext,
} from 'react';
import {
  TAppContext,
  TAppProviderProps,
  TPartialDefaultApp,
  TValue,
} from '@brysonandrew/app/config/types';
import { once } from '@brysonandrew/utils-function';

const initContext = once(<
  T extends TPartialDefaultApp = TPartialDefaultApp,
>() => createContext<TValue<T>>({} as TValue<T>));

export const useApp = <
  T extends TPartialDefaultApp = TPartialDefaultApp,
>() =>
  useReactContext<TValue<T>>(
    initContext() as TAppContext<T>,
  );

export const AppProvider = <
  T extends TPartialDefaultApp = TPartialDefaultApp,
>({
  children,
  ...value
}: TAppProviderProps<T>) => {
  const CONTEXT = initContext();

  return (
    <CONTEXT.Provider value={value}>
      {children}
    </CONTEXT.Provider>
  );
};
