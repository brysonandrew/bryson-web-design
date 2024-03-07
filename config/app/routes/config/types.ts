import { SECTION_RECORD } from '@app/routes';
import * as Pages from '@pages/index';

export type TPages = typeof Pages;
export type TPageTitle = keyof TPages;
export type TPage = TPages[TPageTitle];

export type TSectionTitleKey = keyof typeof SECTION_RECORD;
export type TSectionTitle =
  (typeof SECTION_RECORD)[TSectionTitleKey];
