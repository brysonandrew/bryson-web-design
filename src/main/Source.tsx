import { Contact } from '@pages/contact';
import { Index } from '@pages/index';
import { Projects } from '@pages/projects';
import { Navigate, useRoutes } from 'react-router-dom';
import { Cv } from '@pages/cv';
import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Screen } from '@pages/kino/screen';
import { Projector } from '@pages/kino/projector';
import { Reader } from '@pages/reader';
import { Services } from '@pages/services';

const WITH_SHELL_KEY = 'with-shell';

const SHELL_ROUTES: any[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
].map((v) => ({ ...v, key: WITH_SHELL_KEY }));

const STANDALONE_ROUTES = [
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
