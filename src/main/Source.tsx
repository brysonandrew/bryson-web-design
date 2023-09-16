import { Contact } from '@pages/contact';
import { Index } from '@pages/index';
import { Projects } from '@pages/projects';
import { Navigate, useRoutes } from 'react-router-dom';
import { Cv } from '@pages/cv';
import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Kino } from '@pages/kino';
import { Screen } from '@pages/screen';

const STANDALONE_KEY = 'standalone';

const SHELL_ROUTES: any[] = [
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
    path: '/kino',
    element: <Kino />,
  },
  {
    path: '/screen',
    element: <Screen />,
  },
  {
    path: '/cv',
    element: <Cv />,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
].map((v) => ({ ...v, key: STANDALONE_KEY }));

const ROUTES = [...SHELL_ROUTES, ...STANDALONE_ROUTES];

export const Source = () => {
  const page = useRoutes(ROUTES);

  switch (page?.key) {
    case STANDALONE_KEY:
      return (
        <MainShell>
          <Shell>{page}</Shell>
        </MainShell>
      );
    default:
      return page;
  }
};
