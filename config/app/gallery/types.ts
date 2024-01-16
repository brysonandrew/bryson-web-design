import { TTTitleToKebab } from '@lib/types/transformers/format/title';
import { INIT_PROJECT_ITEMS } from './items';

export type TInitProjectItems = typeof INIT_PROJECT_ITEMS;

export type TTitle = TInitProjectItems[number]['title'];
export type TSlug = TTTitleToKebab<TTitle>;
