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
