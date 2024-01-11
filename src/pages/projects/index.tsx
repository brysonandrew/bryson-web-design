import { Suspense, lazy } from 'react';
import { Main } from './Main';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Section } from '@components/layout/Section';
import { P60Y } from '@components/layout/space/P60Y';
const Gallery = lazy(() => import('@pages/projects/gallery'));

export const Projects = () => {
  return (
    <>
      <Section title={SECTION_RECORD.projects}>
        <Main />
        <P60Y />
      </Section>
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
    </>
  );
};
