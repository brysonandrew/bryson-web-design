import { TTTitleToKebab } from '@lib/types/transformers/format/title';
import { INIT_PROJECT_ITEMS } from './items';

export type TInitItems = typeof INIT_PROJECT_ITEMS;

export type TInitItem = TInitItems[number] & {
  time?: Date;
};
export type TTitle = TInitItems[number]['title'];
export type TSlug = TTTitleToKebab<TTitle>;
export type TItem = TInitItem & {
  slug: TSlug;
};
