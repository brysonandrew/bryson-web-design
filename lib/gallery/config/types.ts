import { TTTitleToKebab } from '@brysonandrew/config-types';
import { FC } from 'react';

export type TItemsConfig<
  T extends string,
  R extends object = object,
  K extends string = TTTitleToKebab<T>,
> = {
  ITEMS: TItems<T, R>;
  ITEMS_RECORD: Record<K, TItem<T, R>>;
  SLUGS: K[];
};

export type TGalleryHeaderProps<T extends string> = {
  LeftHeader: FC<TSlugProps<T>>;
  RightHeader: FC<TSlugProps<T> & { isHover?: boolean }>;
};
export type TGalleryConfig<T extends string> = {
  Viewer: TGalleryHeaderProps<T>;
  List: TGalleryHeaderProps<T>;
};

export type TValue<
  T extends string = string,
  R extends object = object,
> = TItemsConfig<T, R> & TGalleryConfig<T>;

export type TTag = {
  title: string;
  href?: string;
};
export type TInitItem<
  T extends string = string,
  R extends object = object,
> = {
  title: T;
  description: string;
  paragraphs?: readonly string[];
  time?: Date;
  tags?: readonly TTag[];
  href?: string;
  category?: string;
  altTo?: string;
} & R;

export type TInitItems<
  T extends string = string,
  R extends object = object,
> = readonly TInitItem<T, R>[];

export type TSlugProps<T extends string = string> = {
  slug: TTTitleToKebab<T>;
};

export type TItem<
  T extends string = string,
  R extends object = object,
> = TInitItem<T, R> & TSlugProps<T>;
export type TItems<
  T extends string = string,
  R extends object = object,
> = readonly TItem<T, R>[];
