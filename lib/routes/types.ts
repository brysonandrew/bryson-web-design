import { TTTitleToKebab } from '@brysonandrew/types';

export type TPageKey<T extends string> = TTTitleToKebab<T>;
type TPath<T extends string> = T extends 'Index'
  ? '/'
  : `/${TTTitleToKebab<T>}`;

export type TPage<T extends string> = {
  key: TPageKey<T>;
  title: T;
  path: TPath<T>;
};
export type TPageRecord<T extends string> = Record<
  TPageKey<T>,
  TPage<T>
>;
