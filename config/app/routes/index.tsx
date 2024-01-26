import { Navigate, RouteObject } from 'react-router-dom';
import * as Pages from '@pages/index';
import { resolvePageRecords } from '@brysonandrew/routes';
import { Cv } from '@pages/_workshop/cv';
import { Reader } from '@pages/_workshop/reader';
import { Shell } from 'src/shell';

export const PAGE_TITLES = [
  'Index',
  'Pricing',
  'Projects',
  'Contact',
] as const;

export type TPageTitle = (typeof PAGE_TITLES)[number];

const { PAGES_ROUTES, PAGE_RECORD, PAGE_VALUES } =
  resolvePageRecords<TPageTitle, any>(PAGE_TITLES, Pages);

export const SECTION_RECORD = {
  build: 'Building websites and apps',
  [PAGE_RECORD.pricing.key]:
    "Choose a plan that's right for you", //; 'Website Packages', //'What I can help you with',
  tech: 'Powered by',
  [PAGE_RECORD.projects.key]: 'Selected works',
  [PAGE_RECORD.contact.key]: 'Get in touch',
} as const;

const STANDALONE_ROUTES = [
  {
    path: '/reader',
    element: <Reader />,
  },
  {
    path: '/cv',
    element: <Cv />,
  },
  {
    path: '*',
    element: (
      <Navigate to={PAGE_RECORD.index.path} replace />
    ),
  },
];

export const ROUTES: RouteObject[] = [
  {
    path: PAGE_RECORD.index.path,
    Component: Shell,
    children: [
      {
        index: true,
        path: PAGE_RECORD.index.path,
        Component: Pages.Index,
      },
      ...PAGES_ROUTES,
    ],
  },
  ...STANDALONE_ROUTES,
];

export { PAGES_ROUTES, PAGE_RECORD, PAGE_VALUES };
