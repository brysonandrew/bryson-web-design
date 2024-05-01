import {
  DEV_PATH_BASE,
  DEV_PATH_KEYS,
} from '@app/routes/dev/config/constants';
import { AppNotFound } from '@brysonandrew/app';
import { List } from './List';
import { RouteObject } from 'react-router';
import { TDevPageTitle } from '@app/routes/dev/config/types';
import { resolveRouteRecords } from '@brysonandrew/routes';
import * as DevPages from '@pages/_dev';

export const DEV_RECORD = resolveRouteRecords<
  TDevPageTitle,
  typeof DevPages
>(DEV_PATH_KEYS, DevPages, DEV_PATH_BASE);

export const DEV_ROUTES: RouteObject[] = [
  {
    path: DEV_PATH_BASE,
    Component: List,
    children: [
      ...DEV_RECORD.routes,
      {
        path: '*',
        element: <AppNotFound homePath={DEV_PATH_BASE} />,
      },
    ],
  },
];
