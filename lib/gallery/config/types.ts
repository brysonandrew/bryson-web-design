import { TPricingKey } from '@pages/pricing/config/types';

export type TTag = {
  title: string;
  href?: string;
};
export type TInitItem<T extends string = string> = {
  title: T;
  description: string;
  pricing: TPricingKey;
  paragraphs?: readonly string[];
  time?: Date;
  tags?: readonly TTag[];
  href?: string;
  category?: string;
  altTo?: string;
};

export type TInitItems<T extends string = string> =
  readonly TInitItem<T>[];

export type TSlugProps<K extends string = string> = {
  slug: K;
};

export type TItem<
  T extends string = string,
  K extends string = string,
> = TInitItem<T> & TSlugProps<K>;
export type TItems<
  T extends string = string,
  K extends string = string,
> = readonly TItem<T, K>[];
