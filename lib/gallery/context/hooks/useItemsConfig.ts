import {
  TInitItems,
  TItem,
  TItems,
} from '@brysonandrew/gallery/config/types';
import { TTTitleToKebab } from '@brysonandrew/types/transformers/format/title';
import { useMemo } from 'react';
import { TItemsConfig } from '../config/types';
import { resolveItem } from '../utils/resolveItem';

export const useItemsConfig = <
  T extends string,
  K extends string,
  R extends object,
>(
  initItems: TInitItems<T>,
) => {
  type TSlug = K;
  type TRecord = Record<TSlug, TItem<T, K, R>>;
  const result = useMemo<TItemsConfig<T, K, R>>(() => {
    const ITEMS = initItems.map(resolveItem<T, K>) as TItem<
      T,
      K,
      R
    >[];
    const ITEMS_RECORD = ITEMS.reduce(
      (a, item: TItem<T, K, R>) => {
        a[item.slug] = item;
        return a;
      },
      {} as TRecord,
    );
    const SLUGS = Object.keys(ITEMS_RECORD) as TSlug[];
    return { ITEMS, ITEMS_RECORD, SLUGS } as const;
  }, []);

  return result;
};
