import {
  TInitItems,
  TItem,
  TItems,
} from '@lib/gallery/config/types';
import { TTTitleToKebab } from '@lib/types/transformers/format/title';
import { useMemo } from 'react';
import { TItemsConfig } from '../config/types';
import { resolveItem } from '../utils/resolveItem';

export const useItemsConfig = <
  T extends string,
  K extends string,
>(
  initItems: TInitItems<T>,
) => {
  type TSlug = K;
  type TRecord = Record<TSlug, TItem<T, K>>;
  const result = useMemo<TItemsConfig<T, K>>(() => {
    const ITEMS = initItems.map(resolveItem<T, K>) as TItem<
      T,
      K
    >[];
    const ITEMS_RECORD = ITEMS.reduce(
      (a, item: TItem<T, K>) => {
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
