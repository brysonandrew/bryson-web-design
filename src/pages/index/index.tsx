import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Suspense, lazy } from 'react';
import { Build } from './build';
import { Space24 } from '@components/spaces/Space24';
import { Space32 } from '@components/spaces/Space32';
import { Space48 } from '@components/spaces/Space48';
import { LayoutGroup } from 'framer-motion';
import { Gallery } from '@components/gallery';
import { Contact } from './contact';
import { Projects } from './projects';
import { Tech } from './tech';
// const Tech = lazy(() => import('./tech'));
// const Contact = lazy(() => import('./contact'));
// const Projects = lazy(() => import('./projects'));
// const Gallery = lazy(() => import('@components/gallery'));

export const Index = () => {
  return (
    <MainShell>
      <Shell>
        <Build />
        <Space24 />
        <Suspense fallback={null}>
          <Tech />
        </Suspense>
        <Space32 />
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Space48 />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Space48 />
        <Suspense fallback={null}>
          <Gallery />
        </Suspense>
      </Shell>
    </MainShell>
  );
};
