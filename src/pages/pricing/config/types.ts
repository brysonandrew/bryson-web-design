import { TTTitleToKebab } from '@t/transformers/format';
import { PACKAGES } from './constants';

export type TPackageTitle = (typeof PACKAGES)[number];
export type TPackageKey = TTTitleToKebab<TPackageTitle>;
