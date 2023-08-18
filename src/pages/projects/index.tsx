import { Suspense, lazy } from 'react';
import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { SECTION_TITLES } from '@constants/copy';
import { Section } from '@components/Section';
const Gallery = lazy(() => import('@components/gallery'));
import { P60Y } from '@components/space/P60Y';
import { useRect } from '@hooks/dom/useRect';

export const Projects = () => {
  const { rect, onUpdate } = useRect();

  return (
    <MainShell>
      <Shell>
        <Section title={SECTION_TITLES.projects}>
          <div
            ref={(instance) => {
              if (instance && !rect) {
                onUpdate(instance);
              }
            }}
            style={{ height: rect?.height }}
          >
            <Main />
          </div>
          <P60Y />
        </Section>
        <Suspense fallback={null}>
          <Gallery />
        </Suspense>
      </Shell>
    </MainShell>
  );
};
