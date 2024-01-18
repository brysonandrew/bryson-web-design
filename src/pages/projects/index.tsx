import { Suspense, lazy } from 'react';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Section } from '@brysonandrew/lib/components/layout/section';
import { P60Y } from '@brysonandrew/lib/components/layout/space/P60Y';
import { Main } from './Main';

const Viewer = lazy(() => import('@brysonandrew/lib/gallery/viewer'));

export const Projects = () => {
  return (
    <>
      <Section title={SECTION_RECORD.projects}>
        <Main />
        <P60Y />
      </Section>
      <Suspense fallback={null}>
        <Viewer />
      </Suspense>
    </>
  );
};
