import { DEV_RECORD } from './config/constants';
import { DEV_PATH_BASE } from '@app/routes/dev/config/constants';
import { NotFound } from '@brysonandrew/routes/not-found';
import { List } from './List';
import { RouteObject } from 'react-router';

export const DEV_ROUTES: RouteObject[] = [
  {
    path: DEV_PATH_BASE,
    Component: List,
    children: [
      ...DEV_RECORD.routes,
      {
        path: '*',
        element: <NotFound homePath={DEV_PATH_BASE} />,
      },
    ],
  },
];
