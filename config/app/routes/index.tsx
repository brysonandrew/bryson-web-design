import { RouteObject } from 'react-router-dom';
import * as Pages from '@pages/index';
import { Shell } from '@shell';
import {
  NotFound,
  resolvePageRecords,
} from '@brysonandrew/routes';
import { DEV_ROUTES } from '@app/routes/dev';
import { WORKSHOP_ROUTES } from '@app/routes/workshop';

export const PAGE_TITLES = [
  'Index',
  'Pricing',
  'Projects',
  'Contact',
] as const;

export type TPageTitle = (typeof PAGE_TITLES)[number];

const { PAGES_ROUTES, PAGE_RECORD, PAGE_VALUES } =
  resolvePageRecords<TPageTitle, any>(PAGE_TITLES, Pages);

const SECTION_RECORD = {
  build: 'Building websites and apps',
  [PAGE_RECORD.pricing.key]:
    "Choose a plan that's right for you", //; 'Website Packages', //'What I can help you with',
  tech: 'Powered by',
  [PAGE_RECORD.projects.key]: 'Selected works',
  [PAGE_RECORD.contact.key]: 'Get in touch',
} as const;

const path = PAGE_RECORD.index.path;

const MAIN_ROUTES = [
  {
    path,
    Component: Shell,
    children: [
      ...PAGES_ROUTES,
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const ROUTES: RouteObject[] = [
  ...MAIN_ROUTES,
  ...WORKSHOP_ROUTES,
  ...(import.meta.env.DEV ? DEV_ROUTES : []),
];

export {
  ROUTES,
  PAGES_ROUTES,
  PAGE_RECORD,
  PAGE_VALUES,
  SECTION_RECORD,
};
