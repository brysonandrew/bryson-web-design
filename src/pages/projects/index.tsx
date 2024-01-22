import { Suspense, lazy } from 'react';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Section } from '@brysonandrew/base/components/layout/section';
import { P60Y } from '@brysonandrew/base/components/layout/space/P60Y';
import { Main } from './Main';

const Viewer = lazy(() => import('@brysonandrew/gallery/viewer'));

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
