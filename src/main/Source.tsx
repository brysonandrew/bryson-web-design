import { Contact } from '@pages/contact';
import { Index } from '@pages/index';
import { Projects } from '@pages/projects';
import { Navigate, useRoutes } from 'react-router-dom';
import { Cv } from '@pages/cv';
import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';

const SHELL_ROUTES = [
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
];
const STANDALONE_ROUTES = [
  {
    path: '/cv',
    element: <Cv />,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
];
export const Source = () => {
  const shellPage = useRoutes(SHELL_ROUTES);
  const standalonePage = useRoutes(STANDALONE_ROUTES);

  if (shellPage) {
    return (
      <MainShell>
        <Shell>{shellPage}</Shell>
      </MainShell> 
    );
  }
  return standalonePage ?? null;
};
