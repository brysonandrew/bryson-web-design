import {
  TItem,
  TItems,
  TSlugProps,
} from 'lib/gallery/config/types';
import { FC } from 'react';

export type TItemsConfig<
  T extends string,
  K extends string,
> = {
  ITEMS: TItems<T, K>;
  ITEMS_RECORD: Record<K, TItem<T, K>>;
  SLUGS: K[];
};

export type TGalleryConfig = {
  Viewer: { RightHeader: FC<TSlugProps> };
  List: {
    RightHeader: FC<TSlugProps & { isHover?: boolean }>;
  };
};

export type TContext<
  T extends string = string,
  K extends string = string,
> = TItemsConfig<T, K> & TGalleryConfig;
