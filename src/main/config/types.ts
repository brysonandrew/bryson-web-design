import { TTTitleToKebab } from '@t/transformers/format';
import { PAGE_TITLES } from './constants/app';

export type TPageTitle = (typeof PAGE_TITLES)[number];
export type TPageKey = TTTitleToKebab<TPageTitle>;
