import { resolvePage } from '@utils/routes';
import { TPage, TPageRecord } from '../types';

export const PAGE_NAV_TITLES = [
  'Pricing',
  'Projects',
  'Contact',
] as const;

export const PAGE_TITLES = [
  ...PAGE_NAV_TITLES,
  'Index',
] as const;

export const INDEX_RECORD = resolvePage('Index', '/');

export const PAGE_NAV_RECORD = PAGE_NAV_TITLES.reduce(
  (a, title) => {
    const page = resolvePage<typeof title>(title);
    return { ...a, ...page };
  },
  {} as TPageRecord,
);

export const PAGE_NAV_VALUES = Object.values(
  PAGE_NAV_RECORD,
) as TPage[];

export const PAGE_RECORD = {
  ...INDEX_RECORD,
  ...PAGE_NAV_RECORD,
} as const;

export const PAGE_VALUES = Object.values(
  PAGE_RECORD,
) as TPage[];
