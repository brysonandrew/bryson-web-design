import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { STORY } from '@constants/copy';
import { Section } from '@components/Section';
import { Gallery } from '@components/gallery';
import { useRect } from '@hooks/useRect';
import { Space60 } from '@components/spaces/Space60';

export const Projects = () => {
  const { rect, onUpdate } = useRect();

  return (
    <MainShell>
      <Shell>
        <Section title={STORY.projects}>
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
          <Space60 />
        </Section>
        <Gallery />
      </Shell>
    </MainShell>
  );
};
