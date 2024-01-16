import {
  TInitItems,
  TItem,
} from '@lib/gallery/config/types';
import { TTTitleToKebab } from '@lib/types/transformers/format/title';
import { useMemo } from 'react';
import { resolveItem } from '../utils/resolveItem';

export const useItemsConfig = <T extends TInitItems>(
  initItems: T,
) => {
  type TTitle = T[number]['title'];
  type TSlug = TTTitleToKebab<TTitle>;
  const result = useMemo(() => {
    const ITEMS = initItems.map(
      resolveItem<TTitle>,
    ) as TItem<TTitle>[];
    const ITEMS_RECORD = ITEMS.reduce(
      (a, item: TItem<TTitle>) => {
        a[item.slug] = item;
        return a;
      },
      {} as Record<TSlug, TItem<TTitle>>,
    );
    const SLUGS = Object.keys(ITEMS_RECORD) as TSlug[];
    return { ITEMS, ITEMS_RECORD, SLUGS } as const;
  }, []);

  return result;
};

export type TItemsConfig<T extends TInitItems> = ReturnType<
  typeof useItemsConfig<T>
>;
