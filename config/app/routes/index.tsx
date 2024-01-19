import { Index } from '@pages/index';
import { Shell } from '@components/shell';
import * as Pages from '@pages/index';
import { Cv } from '@pages/_workshop/cv';
import { Screen } from '@pages/_workshop/kino/screen';
import { Projector } from '@pages/_workshop/kino/projector';
import { Reader } from '@pages/_workshop/reader';
import { Navigate, RouteObject } from 'react-router-dom';
import { TPage } from './types';
import { PAGE_RECORD } from './constants/pages';

const PAGES_ROUTES = Object.values(PAGE_RECORD).map(
  ({ title, path }: TPage) => {
    const Component = Pages[title];
    return {
      path,
      Component,
    };
  },
);

export const STANDALONE_ROUTES = [
  {
    path: '/projector',
    element: <Projector />,
  },
  {
    path: '/screen',
    element: <Screen />,
  },
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
        Component: Index,
      },
      ...PAGES_ROUTES,
    ],
  },
  ...STANDALONE_ROUTES,
];
