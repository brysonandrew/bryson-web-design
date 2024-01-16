import { TTTitleToKebab } from '@lib/types/transformers/format/camel';
import { TPricingKey } from '@pages/pricing/config/types';

export type TTag = {
  title: string;
  href?: string;
};
export type TItemInit<K extends string = string> = {
  title: K;
  description: string;
  pricing: TPricingKey;
  paragraphs?: readonly string[];
  time?: Date;
  tags?: readonly TTag[];
  href?: string;
  category?: string;
  altTo?: string;
};

export type TInitItems<K extends string = string> =
  TItemInit<K>[];

export type TItem<K extends string = string> =
  TItemInit<K> & {
    slug: TTTitleToKebab<K>;
  };

export type TSlugProps<K extends string = string> = Pick<
  TItem<K>,
  'slug'
>;
