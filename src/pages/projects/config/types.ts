import { TPricingKey } from '@pages/pricing/config/types';
import { PROJECT_ITEMS_RECORD } from './constants/items';

export type TTag = {
  title: string;
  href?: string;
};
export type TItemInit = {
  title: string;
  description: string;
  pricing: TPricingKey;
  paragraphs?: string[];
  time?: Date;
  tags?: TTag[];
  href?: string;
  category?: string;
  altTo?: string;
};
export type TItem = TItemInit & {
  slug: string;
};
export type TSlugProps = Pick<TItem, 'slug'>;

export type TProjectItemRecord = Record<string, TItem>;
export type TProjectKey = keyof typeof PROJECT_ITEMS_RECORD;
