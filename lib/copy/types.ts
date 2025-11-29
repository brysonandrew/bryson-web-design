import { TTTitleToKebab } from '@brysonandrew/config-types';
import { INIT_PROJECT_ITEMS } from './items';
import { PACKAGES } from './base';

export type TPricingTitle = (typeof PACKAGES)[number];
export type TPricingKey = TTTitleToKebab<TPricingTitle>;

export type TInitItems = typeof INIT_PROJECT_ITEMS;
export type TRest = {
  time?: Date;
  pricing: TPricingKey;
};
export type TInitItem = TInitItems[number] & TRest;
export type TTitle = TInitItems[number]['title'];
export type TSlug = TTTitleToKebab<TTitle>;
export type TItem = TInitItem & {
  slug: TSlug;
};
