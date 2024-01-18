import {
  TInitItem,
  TItem,
} from '@brysonandrew/lib/gallery/config/types';
import { titleToKebab } from '@brysonandrew/lib/utils/format';

export const resolveItem = <
  T extends string,
  K extends string,
>(
  item: TInitItem<T>,
): TItem<T, K> => ({
  ...item,
  slug: titleToKebab(item.title) as K,
});
