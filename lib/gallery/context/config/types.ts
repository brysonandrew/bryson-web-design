import {
  TItem,
  TItems,
  TSlugProps,
} from '@brysonandrew/lib/gallery/config/types';
import { FC } from 'react';

export type TItemsConfig<
  T extends string,
  K extends string,
  R extends object,
> = {
  ITEMS: TItems<T, K, R>;
  ITEMS_RECORD: Record<K, TItem<T, K, R>>;
  SLUGS: K[];
};

export type TGalleryConfig<K extends string> = {
  Viewer: { RightHeader: FC<TSlugProps<K>> };
  List: {
    RightHeader: FC<TSlugProps<K> & { isHover?: boolean }>;
  };
};

export type TValue<
  T extends string = string,
  K extends string = string,
  R extends object = object,
> = TItemsConfig<T, K, R> & TGalleryConfig<K>;
