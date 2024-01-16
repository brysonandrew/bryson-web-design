import { PropsWithChildren } from 'react';
import { TInitItems } from '@lib/gallery/config/types';
import { useItemsConfig } from './hooks/useItemsConfig';
import { GALLERY } from './config/constants';

type TProps<T extends string> = {
  initItems: TInitItems<T>;
};
export const Provider = <
  T extends string,
  K extends string,
>({
  initItems,
  children,
}: PropsWithChildren<TProps<T>>) => {
  const itemsConfig = useItemsConfig<T, K>(initItems);

  return (
    <GALLERY.Provider value={itemsConfig}>
      {children}
    </GALLERY.Provider>
  );
};
