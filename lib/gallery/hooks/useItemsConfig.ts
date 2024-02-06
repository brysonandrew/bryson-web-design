import { TTTitleToKebab } from '@brysonandrew/config';
import {
  TInitItems,
  TItem,
  TItemsConfig,
} from '@brysonandrew/gallery/config/types';
import { resolveItem } from '@brysonandrew/gallery/utils/resolveItem';
import { useMemo } from 'react';

export const useItemsConfig = <
  T extends string,
  R extends object,
>(
  initItems: TInitItems<T, R>,
) => {
  type TSlug = TTTitleToKebab<T>;
  type TRecord = Record<TSlug, TItem<T, R>>;
  const result = useMemo<TItemsConfig<T, R>>(() => {
    const ITEMS = initItems.map(resolveItem<T, R>);
    const ITEMS_RECORD = ITEMS.reduce((a, item) => {
      a[item.slug] = item;
      return a;
    }, {} as TRecord);
    const SLUGS = Object.keys(ITEMS_RECORD) as TSlug[];
    return { ITEMS, ITEMS_RECORD, SLUGS } as const;
  }, []);

  return result;
};
