import { Contact } from '@pages/contact';
import { Index } from '@pages/index';
import { Showcase } from '@pages/showcase';
import { Navigate, useRoutes } from 'react-router-dom';
import { MOTH_ROUTES } from './moth';
import { OstWip } from '@pages/ost-wip';
import { AlbumCover } from '@pages/album-cover';
import { Sample as SampleSongs } from '@pages/songs/sample';
import { Hype as HypeSongs } from '@pages/songs/hype';
import { Card } from '@pages/card';
import { Cv } from '@pages/cv';

export const Source = () => {
  const COMMON_ROUTES = [
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/projects',
      element: <Showcase />,
    },
    {
      path: '*',
      element: <Navigate to='/' replace />,
    },
  ];

  const ROUTES = false// import.meta.env.DEV
    ? [
        ...COMMON_ROUTES,
        {
          path: '/songs',
          element: <SampleSongs />,
        },
        {
          path: '/hype',
          element: <HypeSongs />,
        },
        {
          path: '/ost-wip',
          element: <OstWip />,
        },
        {
          path: '/album-cover',
          element: <AlbumCover />,
        },
        {
          path: '/card',
          element: <Card />,
        },
        {
          path: '/cv',
          element: <Cv />,
        },
        ...MOTH_ROUTES,
      ]
    : [...COMMON_ROUTES];
  const element = useRoutes(ROUTES);
  if (!element) return null;

  return element;
};
