import { TTTitleToKebab } from '@brysonandrew/base/types/transformers/format/title';
import { PACKAGES } from './constants';

export type TPricingTitle = (typeof PACKAGES)[number];
export type TPricingKey = TTTitleToKebab<TPricingTitle>;
