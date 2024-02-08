import { Suspense, lazy } from 'react';
import { Section } from '@brysonandrew/layout-section';
import { P60Y } from '@brysonandrew/space/P60Y';
import { Main } from './Main';
import { SECTION_RECORD } from '@app/routes';

const Viewer = lazy(() => import('@brysonandrew/gallery-viewer'));

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
