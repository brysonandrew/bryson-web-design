import { Suspense, lazy } from 'react';
import { P48Y } from '@brysonandrew/space/P48Y';
import { P24Y } from '@brysonandrew/space/P24Y';
import Build from '@pages/index/build';
import { SnowfallOverlay } from '@brysonandrew/snowfall';
import { useScroll } from '@brysonandrew/motion-scroll';
import { AnimatePresence } from 'framer-motion';
const AboutLazy = lazy(() => import('./about'));
const ServicesLazy = lazy(() => import('./services'));
const ProjectsLazy = lazy(() => import('./projects'));
const ContactLazy = lazy(() => import('./contact'));
const ViewerLazy = lazy(
  () => import('@brysonandrew/gallery-viewer'),
);

export const Index = () => {
  const { isScroll } = useScroll();

  return (
    <>
      <AnimatePresence initial={false}>
        {!isScroll && <SnowfallOverlay maxFlakes={100} />}
      </AnimatePresence>
      <Build />
      <P24Y />
      <Suspense fallback={null}>
        <AboutLazy />
      </Suspense>
      <P48Y />
      <Suspense fallback={null}>
        <ServicesLazy />
      </Suspense>
      <P48Y />
      <Suspense fallback={null}>
        <ProjectsLazy />
      </Suspense>
      <P48Y />
      <Suspense fallback={null}>
        <ContactLazy />
      </Suspense>
      <P48Y />
      <Suspense fallback={null}>
        <ViewerLazy />
      </Suspense>
    </>
  );
};

export { Projects } from '../projects';
export { Contact } from '../contact';
