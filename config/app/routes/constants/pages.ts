import { resolvePage } from '../../../../lib/utils';
import { TPageRecord } from '../types';

export const PAGE_TITLES = [
  'Index',
  'Pricing',
  'Projects',
  'Contact',
] as const;

export const PAGE_RECORD = PAGE_TITLES.reduce(
  (a, title) => {
    const page = resolvePage<typeof title>(title);
    return { ...a, ...page };
  },
  {} as TPageRecord,
);
