import { Suspense, lazy } from 'react';
import { Main } from './Main';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Section } from '@components/layout/Section';
import { P60Y } from '@components/layout/space/P60Y';
import { PersistHeight } from '@components/layout/space/PersistHeight';
const Gallery = lazy(() => import('@components/gallery'));

export const Projects = () => {
  return (
    <>
      <Section title={SECTION_RECORD.projects}>
        <PersistHeight>
          <Main />
        </PersistHeight>
        <P60Y />
      </Section>
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
    </>
  );
};
