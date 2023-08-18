import { lazy } from 'react';
import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { SECTION_TITLES } from '@constants/copy';
import { Section } from '@components/Section';
const Gallery = lazy(() => import('@components/gallery'));
import { useRect } from '@hooks/useRect';
import { P60Y } from '@components/space/P60Y';

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
        <Gallery />
      </Shell>
    </MainShell>
  );
};
