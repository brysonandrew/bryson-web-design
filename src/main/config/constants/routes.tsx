import { Cv } from '@pages/cv';
import { Screen } from '@pages/kino/screen';
import { Projector } from '@pages/kino/projector';
import { Reader } from '@pages/reader';
import { Navigate, RouteObject } from 'react-router-dom';
import { Index } from '@pages/index';
import * as P from '@pages/index';
import { kebabToPascal } from '@utils/format';
import { Shell } from '@components/shell';
import { TPageKey } from '../types';
import { PAGE_KEYS } from './app';

const PAGES_ROUTES = PAGE_KEYS.map((key: TPageKey) => {
  const componentKey = kebabToPascal(key);
  const Component = P[componentKey];
  return {
    path: `/${key}`,
    Component,
  };
});

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    Component: Shell,
    children: [
      {
        path: '/',
        Component: Index,
      },
      ...PAGES_ROUTES,
    ],
  },
];

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
