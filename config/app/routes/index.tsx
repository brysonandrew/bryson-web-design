import { RouteObject } from 'react-router-dom';
import * as Pages from '@pages/index';
import { Shell } from '@shell';
import { resolveRouteRecords } from '@brysonandrew/routes';
import { DEV_ROUTES } from '@app/routes/dev';
import { WORKSHOP_ROUTES } from '@app/routes/workshop';
import { TPageTitle } from '@app/routes/config/types';
import { AppNotFound } from '@brysonandrew/app';

const PAGE_RECORDS = resolveRouteRecords<
  TPageTitle,
  typeof Pages
>(['Index', 'Projects', 'Contact'] as TPageTitle[], Pages);
const { routes, record } = PAGE_RECORDS;
const SECTION_RECORD = {
  build: 'Building websites and apps',
  about: 'Nice to meet you',
  services: 'How I can help',
  tech: 'Powered by',
  [record.projects.key]: 'Selected works',
  [record.contact.key]: 'Get in touch',
} as const;

const MAIN_ROUTES = [
  {
    path: record.index.path,
    Component: Shell,
    children: [
      ...routes,
      {
        path: '*',
        element: <AppNotFound />,
      },
    ],
  },
];

const ROUTES: RouteObject[] = [
  ...MAIN_ROUTES,
  ...WORKSHOP_ROUTES,
  ...(import.meta.env.DEV ? DEV_ROUTES : []),
];

export { PAGE_RECORDS, ROUTES, SECTION_RECORD };
