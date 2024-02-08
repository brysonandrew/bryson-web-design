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
import { once } from '@brysonandrew/utils-function';

const initContext = once(<
  T extends string,
  R extends object,
>() => createContext<TValue<T, R>>({} as TValue<T, R>));

export const useGallery = <
  T extends string,
  R extends object,
>() => useReactContext<TValue<T, R>>(initContext());

type TProps<
  T extends string,
  R extends object,
> = TGalleryConfig<T> & {
  initItems: TInitItems<T, R>;
};
export const GalleryProvider = <
  T extends string,
  R extends object,
>({
  initItems,
  children,
  ...props
}: PropsWithChildren<TProps<T, R>>) => {
  const CONTEXT = initContext();
  const itemsConfig = useItemsConfig<T, R>(initItems);
  const value = { ...itemsConfig, ...props } as TValue<
    T,
    R
  >;

  return (
    <CONTEXT.Provider value={value}>
      {children}
    </CONTEXT.Provider>
  );
};
