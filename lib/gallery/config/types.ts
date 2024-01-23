import { FC } from 'react';

export type TItemsConfig<
  T extends string,
  K extends string,
  R extends object,
> = {
  ITEMS: TItems<T, K, R>;
  ITEMS_RECORD: Record<K, TItem<T, K, R>>;
  SLUGS: K[];
};

export type TGalleryConfig<K extends string> = {
  Viewer: { RightHeader: FC<TSlugProps<K>> };
  List: {
    RightHeader: FC<TSlugProps<K> & { isHover?: boolean }>;
  };
};

export type TValue<
  T extends string = string,
  K extends string = string,
  R extends object = object,
> = TItemsConfig<T, K, R> & TGalleryConfig<K>;

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

export type TSlugProps<K extends string = string> = {
  slug: K;
};

export type TItem<
  T extends string = string,
  K extends string = string,
  R extends object = object,
> = TInitItem<T, R> & TSlugProps<K>;
export type TItems<
  T extends string = string,
  K extends string = string,
  R extends object = object,
> = readonly TItem<T, K, R>[];
