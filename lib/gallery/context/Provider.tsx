import { PropsWithChildren } from 'react';
import { TInitItems } from '@lib/gallery/config/types';
import { useItemsConfig } from './hooks/useItemsConfig';
import { GALLERY } from './config/constants';
import { TGalleryConfig } from './config/types';

type TProps<T extends string> = TGalleryConfig & {
  initItems: TInitItems<T>;
};
export const Provider = <
  T extends string,
  K extends string,
>({
  initItems,
  children,
  ...props
}: PropsWithChildren<TProps<T>>) => {
  const itemsConfig = useItemsConfig<T, K>(initItems);

  return (
    <GALLERY.Provider value={{ ...itemsConfig, ...props }}>
      {children}
    </GALLERY.Provider>
  );
};
