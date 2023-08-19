import { Suspense, lazy } from 'react';
import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { SECTION_TITLES } from '@constants/copy';
import { Section } from '@components/Section';
import { P60Y } from '@components/space/P60Y';
import { PersistHeight } from '@components/space/PersistHeight';
const Gallery = lazy(() => import('@components/gallery'));

export const Projects = () => {
  return (
    <MainShell>
      <Shell>
        <Section title={SECTION_TITLES.projects}>
          <PersistHeight>
            <Main />
          </PersistHeight>
          <P60Y />
        </Section>
        <Suspense fallback={null}>
          <Gallery />
        </Suspense>
      </Shell>
    </MainShell>
  );
};
