import { WORKSHOP_RECORD } from './config/constants';
import { WORKSHOP_PATH_BASE } from '@app/routes/workshop/config/constants';
import { NotFound } from '@brysonandrew/routes/not-found';
import { List } from './List';
import { RouteObject } from 'react-router';

export const WORKSHOP_ROUTES: RouteObject[] = [
  {
    path: WORKSHOP_PATH_BASE,
    Component: List,
    children: [
      ...WORKSHOP_RECORD.routes,
      {
        path: '*',
        element: <NotFound homePath={WORKSHOP_PATH_BASE} />,
      },
    ],
  },
];
