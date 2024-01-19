import { TTTitleToKebab } from '@brysonandrew/lib/types/transformers/format/title';
import { SECTION_RECORD } from './constants/index-sections';
import { PAGE_TITLES } from './constants/pages';

export type TSectionTitleKey = keyof typeof SECTION_RECORD;
export type TSectionTitle =
  (typeof SECTION_RECORD)[TSectionTitleKey];

export type TPageTitle = (typeof PAGE_TITLES)[number];
export type TPageKey = TTTitleToKebab<TPageTitle>;
type TPath<T extends string> = T extends 'Index'
  ? '/'
  : `/${TTTitleToKebab<T>}`;
export type TPage<T extends TPageTitle = TPageTitle> = {
  key: TTTitleToKebab<T>;
  title: T;
  path: TPath<T>;
};

export type TPageRecord = Record<TPageKey, TPage>;
