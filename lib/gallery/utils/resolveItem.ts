import {
  TInitItem,
  TItem,
} from '@brysonandrew/gallery/config/types';
import { titleToKebab } from '@brysonandrew/utils-format';

export const resolveItem = <
  T extends string,
  R extends object,
>(
  item: TInitItem<T, R>,
): TItem<T, R> => ({
  ...item,
  slug: titleToKebab(item.title),
});
