import { titleToKebab } from '@utils/format';
import { TPage, TPageRecord, TPageTitle } from './types';

export const PAGE_TITLES = [
  'Pricing',
  'Projects',
  'Contact',
] as const;

const resolvePage = (title: TPageTitle) => {
  const key = titleToKebab(title);
  return {
    [key]: {
      key,
      title,
      path: `/${key}`,
    },
  };
};

export const INDEX_RECORD = {
  index: {
    title: 'Index',
    key: 'index',
    path: '/',
  },
} as const;

export const PAGE_NAV_RECORD: TPageRecord =
  PAGE_TITLES.reduce(
    (a, title) => ({ ...a, ...resolvePage(title) }),
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

export const SECTION_RECORD = {
  build: 'Building websites and apps',
  [PAGE_RECORD.pricing.key]:
    "Choose a plan that's right for you", //; 'Website Packages', //'What I can help you with',
  tech: 'Powered by',
  [PAGE_RECORD.projects.key]: 'Previous projects',
  [PAGE_RECORD.contact.key]: 'Get in touch',
} as const;
