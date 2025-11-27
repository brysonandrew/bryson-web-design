import { newlineToArr } from '@brysonandrew/utils-transformer/newlineToArr';
import { FC } from 'react';
import { PlusContent } from './PlusContent';
import { titleToKebab } from '@brysonandrew/utils-format';
import { TPriceProps } from '@pages/pricing/layout/price';
import {
  TPricingKey,
  TPricingTitle,
} from '@brysonandrew/copy';

type TConfig = {
  listLiteral: string;
  classValue: string;
  PreContent?: FC;
} & TPriceProps;
export const CONFIG_LOOKUP: Record<TPricingKey, TConfig> = {
  standard: {
    price: 2800,
    classValue: 'gradient-standard',
    listLiteral: `
    Perfect for small businesses and startups
    Responsive and user-friendly website
    SEO optimization
    2 x content sections
    Quick turnaround: Get online in no time!`,
  },
  plus: {
    price: 4000,
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
    Integration of cutting-edge technologies (Artificial Intelligence, 3D graphics, Internet of Things)
    `,
  },
} as const;

export const resolvePackageConfig = <
  T extends TPricingTitle
>(
  title: T
) => {
  const key = titleToKebab<T>(title);
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
