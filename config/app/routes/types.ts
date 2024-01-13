import { TTTitleToKebab } from '@lib/types/transformer/format';
import { SECTION_RECORD } from './constants/index-sections';
import { PAGE_TITLES } from './constants/pages';

export type TSectionTitleKey = keyof typeof SECTION_RECORD;
export type TSectionTitle =
  (typeof SECTION_RECORD)[TSectionTitleKey];

export type TPageTitle = (typeof PAGE_TITLES)[number];
export type TPageKey = TTTitleToKebab<TPageTitle>;
export type TPagePath = `/${TPageKey}`;
export type TPage<T extends TPageTitle = TPageTitle> = {
  key: TTTitleToKebab<T>;
  title: T;
  path: `/${TTTitleToKebab<T>}`;
};

export type TPageRecord = Record<TPageKey, TPage>;
