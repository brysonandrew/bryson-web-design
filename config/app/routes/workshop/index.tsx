import { AppNotFound } from '@brysonandrew/app';
import { List } from './List';
import { RouteObject } from 'react-router';
import { TWorkshopPageTitle } from '@app/routes/workshop/config/types';
import * as WorkshopPages from '@pages/_workshop';
import { resolveRouteRecords } from '@brysonandrew/routes';
import {
  WORKSHOP_PATH_KEYS,
  WORKSHOP_PATH_BASE,
} from '@app/routes/workshop/config/constants';

export const WORKSHOP_RECORD = resolveRouteRecords<
  TWorkshopPageTitle,
  typeof WorkshopPages
>(WORKSHOP_PATH_KEYS, WorkshopPages, WORKSHOP_PATH_BASE);

export const WORKSHOP_ROUTES: RouteObject[] = [
  {
    path: WORKSHOP_PATH_BASE,
    Component: List,
    children: [
      ...WORKSHOP_RECORD.routes,
      {
        path: '*',
        element: <AppNotFound homePath={WORKSHOP_PATH_BASE} />,
      },
    ],
  },
];
