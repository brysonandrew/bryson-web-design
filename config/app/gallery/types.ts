import { TPricingKey } from '@pages/pricing/config/types';
import { TTTitleToKebab } from '@brysonandrew/types';
import { INIT_PROJECT_ITEMS } from './items';

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
