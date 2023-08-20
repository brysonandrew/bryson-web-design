import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Suspense, lazy } from 'react';
import { Build } from './build';
import { P48Y } from '@components/space/P48Y';
import { P24Y } from '@components/space/P24Y';
const Tech = lazy(() => import('./tech'));
const Projects = lazy(() => import('./projects'));
const Contact = lazy(() => import('./contact'));
const Gallery = lazy(() => import('@components/gallery'));

export const Index = () => {
  return (
    <MainShell>
      <Shell>
        <Build />
        <P48Y />
        <Suspense fallback={null}>
          <Tech />
        </Suspense>
        <P24Y />
        <P24Y id='projects' />
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <P48Y />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <P48Y />
        <Suspense fallback={null}>
          <Gallery />
        </Suspense>
      </Shell>
    </MainShell>
  );
};
