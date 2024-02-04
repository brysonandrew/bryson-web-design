import {
  TPricingKey,
  TPricingTitle,
} from '@pages/pricing/config/types';
import { TProps as TPriceProps } from '@pages/pricing/layout/price';
import { newlineToArr } from '@brysonandrew/utils/transformer/newlineToArr';
import { FC } from 'react';
import { PlusContent } from './PlusContent';
import { titleToKebab } from '@brysonandrew/utils/format';
import { TTTitleToKebab } from '@brysonandrew/config-types/transformers/format/title';

export const PACKAGES = [
  'Standard',
  'Plus',
  'Select',
] as const;

type TConfig = {
  listLiteral: string;
  classValue: string;
  PreContent?: FC;
} & TPriceProps;
export const CONFIG_LOOKUP: Record<TPricingKey, TConfig> = {
  standard: {
    price: 799,
    classValue: 'gradient-standard',
    listLiteral: `
    Perfect for small businesses and startups
    Responsive and user-friendly website
    SEO optimization
    2 x content sections
    Quick turnaround: Get online in no time!`,
  },
  plus: {
    price: 1399,
    classValue: 'gradient-plus',
    discount: {
      value: 200,
      expiry: new Date(2024, 0, 31),
    },
    listLiteral: `
    Custom design and animations
    4 x content sections
    Contact form
    `,
    PreContent: PlusContent,
  },
  select: {
    price: 'Custom Quote: Tailored to Your Needs',
    classValue: 'gradient-select',
    listLiteral: `
    For unique and specialized projects
    In-depth consultation and planning
    Unlimited features and customization
    Ongoing support and maintenance
    Integration of cutting-edge technologies (AI, 3D rendering, IoT)
    `,
  },
} as const;

export const resolvePackageConfig = (
  title: TPricingTitle,
) => {
  const key = titleToKebab(title) as TTTitleToKebab<
    typeof title
  >;
  const config = CONFIG_LOOKUP[key];
  const { listLiteral, ...rest } = config;

  return {
    key,
    listItems: newlineToArr(listLiteral),
    ...rest,
  } as const;
};

export const STANDARD_CONFIG =
  resolvePackageConfig('Standard');
export const PLUS_CONFIG = resolvePackageConfig('Plus');
export const SELECT_CONFIG = resolvePackageConfig('Select');
