import { TTTitleToKebab } from '@brysonandrew/types/transformers/format/title';
import { PACKAGES } from './constants';

export type TPricingTitle = (typeof PACKAGES)[number];
export type TPricingKey = TTTitleToKebab<TPricingTitle>;
