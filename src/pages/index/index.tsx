import { Suspense, lazy } from 'react';
import { P48Y } from '@components/space/P48Y';
import { P24Y } from '@components/space/P24Y';

const ServicesLazy = lazy(() => import('./services'));
const TechLazy = lazy(() => import('./tech'));
const BuildLazy = lazy(() => import('./build'));
const ProjectsLazy = lazy(() => import('./projects'));
const ContactLazy = lazy(() => import('./contact'));
const GalleryLazy = lazy(
  () => import('@components/gallery'),
);

export const Index = () => {
  return (
    <>
      <BuildLazy />
      <P24Y />
      <Suspense fallback={null}>
        <ServicesLazy />
      </Suspense>
      <P24Y />
      <P24Y />
      <Suspense fallback={null}>
        <TechLazy />
      </Suspense>
      <P24Y />
      <P24Y />
      <Suspense fallback={null}>
        <ProjectsLazy />
      </Suspense>
      <P48Y />
      <Suspense fallback={null}>
        <ContactLazy />
      </Suspense>
      <P48Y />
      <Suspense fallback={null}>
        <GalleryLazy />
      </Suspense>
    </>
  );
};

export { Pricing } from '../pricing';
export { Projects } from '../projects';
export { Contact } from '../contact';
