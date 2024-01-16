import { TItem, TItems } from '@lib/gallery/config/types';

export type TItemsConfig<
  T extends string,
  K extends string,
> = {
  ITEMS: TItems<T, K>;
  ITEMS_RECORD: Record<K, TItem<T, K>>;
  SLUGS: K[];
};

export type TContext<
  T extends string = string,
  K extends string = string,
> = TItemsConfig<T, K>;
