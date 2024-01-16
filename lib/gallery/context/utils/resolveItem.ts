import {
  TItemInit,
  TItem,
} from '@lib/gallery/config/types';
import { titleToKebab } from '@lib/utils/format';

export const resolveItem = <T extends string>(
  item: TItemInit<T>,
): TItem<T> => ({
  ...item,
  slug: titleToKebab(item.title),
});
