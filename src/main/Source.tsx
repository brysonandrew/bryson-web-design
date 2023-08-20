import { Contact } from '@pages/contact';
import { Index } from '@pages/index';
import { Projects } from '@pages/projects';
import { Navigate, useRoutes } from 'react-router-dom';
import { Cv } from '@pages/cv';

export const Source = () => {
  const ROUTES = [
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
      element: <Projects />,
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

  const element = useRoutes(ROUTES);
  if (!element) return null;

  return element;
};
