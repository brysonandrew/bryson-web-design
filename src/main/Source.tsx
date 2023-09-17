import { Contact } from '@pages/contact';
import { Index } from '@pages/index';
import { Projects } from '@pages/projects';
import { Navigate, useRoutes } from 'react-router-dom';
import { Cv } from '@pages/cv';
import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Kino } from '@pages/kino';
import { Screen } from '@pages/screen';

const WITH_SHELL_KEY = 'with-shell';

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
].map((v) => ({ ...v, key: WITH_SHELL_KEY }));

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
];

const ROUTES = [...SHELL_ROUTES, ...STANDALONE_ROUTES];

export const Source = () => {
  const page = useRoutes(ROUTES);
  const key = page?.props.match.route.key;

  switch (key) {
    case WITH_SHELL_KEY:
      return (
        <MainShell>
          <Shell>{page}</Shell>
        </MainShell>
      );
    default:
      return page;
  }
};
