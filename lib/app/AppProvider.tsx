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
import { TPartialLayoutOptionsRecord } from '@brysonandrew/app/config/types/layout';

const initContext = once(<
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
>() => createContext<TValue<S, L>>({} as TValue<S, L>));

export const useApp = <
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
>() =>
  useReactContext<TValue<S, L>>(
    initContext() as TAppContext<S, L>,
  );

export const AppProvider = <
  S extends TPartialDefaultStyle,
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
>({
  children,
  ...value
}: TAppProviderProps<S, L>) => {
  const CONTEXT = initContext();

  return (
    <CONTEXT.Provider value={value}>
      {children}
    </CONTEXT.Provider>
  );
};
