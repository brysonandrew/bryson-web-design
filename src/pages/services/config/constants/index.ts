import {
  TPackageKey,
  TPackageTitle,
} from '@pages/services/config/types';
import { TProps as TPriceProps } from '@pages/services/layout/price';
import { colorToStylesRecord } from '@utils/transformer/colorToStyles';
import { newlineToArr } from '@utils/transformer/newlineToArr';
import { FC } from 'react';
import { PACKAGES_COLOR_LOOKUP } from './colors';
import { PlusContent } from './PlusContent';

export const PACKAGES = [
  'Standard',
  'Plus',
  'Select',
] as const;

type TConfig = any & {
  listLiteral: string;
  PreContent?: FC;
} & TPriceProps;
export const CONFIG_LOOKUP: Record<TPackageKey, TConfig> = {
  standard: {
    price: 799,
    listLiteral: `
    Perfect for small businesses and startups
    Responsive and user-friendly website
    SEO optimization
    2 x content sections
    Quick turnaround: Get online in no time!`,
  },
  plus: {
    price: 1399,
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
    listLiteral: `
    For unique and specialized projects
    In-depth consultation and planning
    Unlimited features and customization
    Ongoing support and maintenance
    Integration of cutting-edge technologies (AI, 3D rendering, IoT)
    `,
    backgroundColorClass: 'bg-select',
    textColorClass: 'text-select',
  },
} as const;

export const resolvePackageConfig = (
  title: TPackageTitle,
) => {
  const key: TPackageKey =
    title.toLowerCase() as TPackageKey;
  const config = CONFIG_LOOKUP[key];
  const { listLiteral, ...rest } = config;
  const color = PACKAGES_COLOR_LOOKUP[key];

  return {
    key,
    listItems: newlineToArr(listLiteral),
    ...colorToStylesRecord(color),
    ...rest,
  };
};

export const STANDARD_CONFIG =
  resolvePackageConfig('Standard');
export const PLUS_CONFIG = resolvePackageConfig('Plus');
export const SELECT_CONFIG = resolvePackageConfig('Select');
