import { Suspense, lazy } from 'react';
import { P48Y } from '@components/space/P48Y';
import { P24Y } from '@components/space/P24Y';
const Tech = lazy(() => import('./tech'));
const Build = lazy(() => import('./build'));
const Projects = lazy(() => import('./projects'));
const Contact = lazy(() => import('./contact'));
const Gallery = lazy(() => import('@components/gallery'));

export const Index = () => {
  return (
    <>
      <Build />
      <P24Y />
      <Suspense fallback={null}>
        <Tech />
      </Suspense>
      <P24Y />
      <P24Y />
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
    </>
  );
};
