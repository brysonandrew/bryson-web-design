import { PropsWithChildren } from 'react';
import { TInitItems } from '@lib/gallery/config/types';
import { useItemsConfig } from './hooks/useItemsConfig';
import { GALLERY } from './config/constants';
import { TContext } from './config/types';

type TProps<T extends TInitItems> = {
  initItems: T;
};

export const Provider = <T extends TInitItems>({
  initItems,
  children,
}: PropsWithChildren<TProps<T>>) => {
  const itemsConfig = useItemsConfig<T>(initItems);

  return (
    <GALLERY.Provider
      value={
        {
          ...itemsConfig,
        } as TContext<T>
      }
    >
      {children}
    </GALLERY.Provider>
  );
};
