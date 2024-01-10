import { Cv } from '@pages/cv';
import { Screen } from '@pages/kino/screen';
import { Projector } from '@pages/kino/projector';
import { Reader } from '@pages/reader';
import { Navigate, RouteObject } from 'react-router-dom';
import { Index } from '@pages/index';
import * as Pages from '@pages/index';
import { Shell } from '@components/shell';
import { TPage } from './types';
import { PAGE_VALUES } from './app';

const PAGES_ROUTES = PAGE_VALUES.map((page: TPage) => {
  const Component = Pages[page.title];
  return {
    path: `/${page.key}`,
    Component,
  };
});

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
    element: <Navigate to='/' replace />,
  },
];

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    Component: Shell,
    children: [
      {
        index: true,
        path: '/',
        Component: Index,
      },
      ...PAGES_ROUTES,
    ],
  },
  ...STANDALONE_ROUTES,
];
