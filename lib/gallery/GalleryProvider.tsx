import {
  PropsWithChildren,
  createContext,
  useContext as useReactContext,
} from 'react';
import { useItemsConfig } from './hooks/useItemsConfig';
import {
  TInitItems,
  TGalleryConfig,
  TValue,
} from '@brysonandrew/gallery/config/types';
import { once } from 'lodash';

const initContext = once(<
  T extends string,
  K extends string,
  R extends object,
>() =>
  createContext<TValue<T, K, R>>({} as TValue<T, K, R>),
);

export const useGallery = <
  T extends string,
  K extends string,
  R extends object,
>() =>
  useReactContext<TValue<T, K, R>>(initContext<T, K, R>());

type TProps<
  T extends string,
  K extends string,
  R extends object,
> = TGalleryConfig<K> & {
  initItems: TInitItems<T, R>;
};
export const GalleryProvider = <
  T extends string,
  K extends string,
  R extends object,
>({
  initItems,
  children,
  ...props
}: PropsWithChildren<TProps<T, K, R>>) => {
  const CONTEXT = initContext<T, K, R>();
  const itemsConfig = useItemsConfig<T, K, R>(initItems);
  const value = { ...itemsConfig, ...props } as TValue<
    T,
    K,
    R
  >;

  return (
    <CONTEXT.Provider value={value}>
      {children}
    </CONTEXT.Provider>
  );
};

type TConsumerProps<
  T extends string,
  K extends string,
  R extends object,
> = {
  children(value: TValue<T, K, R>): JSX.Element;
};
export const Consumer = <
  T extends string,
  K extends string,
  R extends object,
>({
  children,
}: TConsumerProps<T, K, R>) => {
  const CONTEXT = initContext<T, K, R>();

  return <CONTEXT.Consumer>{children}</CONTEXT.Consumer>;
};
