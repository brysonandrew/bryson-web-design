import { TTTitleToKebab } from '@t/transformers/format';
import { PACKAGES } from './constants';

export type TPricingTitle = (typeof PACKAGES)[number];
export type TPricingKey = TTTitleToKebab<TPricingTitle>;
