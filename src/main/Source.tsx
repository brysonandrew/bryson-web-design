import { Contact } from '@pages/contact';
import { Index } from '@pages/index';
import { Showcase } from '@pages/showcase';
import { Navigate, useRoutes } from 'react-router-dom';
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

  const ROUTES =import.meta.env.DEV
    ? [
        ...COMMON_ROUTES,
        {
          path: '/card',
          element: <Card />,
        },
        {
          path: '/cv',
          element: <Cv />,
        },
      ]
    : [...COMMON_ROUTES];
  const element = useRoutes(ROUTES);
  if (!element) return null;

  return element;
};
