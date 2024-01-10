import { TTTitleToKebab } from '@t/transformers/format';
import { INIT, PAGE_TITLES, SECTION_RECORD } from './app';

export type TSectionTitleKey = keyof typeof SECTION_RECORD;
export type TSectionTitle =
  (typeof SECTION_RECORD)[TSectionTitleKey];


export type TPageTitle = (typeof PAGE_TITLES)[number];
export type TPageKey = TTTitleToKebab<TPageTitle>;
export type TPagePath = `/${TPageKey}`;
export type TPage = {
  key: TPageKey;
  title: TPageTitle;
  path: TPagePath;
};

export type TPageRecord = typeof INIT &
  Record<TPageKey, TPage>;


