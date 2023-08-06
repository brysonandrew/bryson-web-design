import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { STORY } from '@constants/copy';
import { Section } from '@components/Section';
import { Gallery } from '@components/gallery';
import { Space24 } from '@components/spaces/Space24';

export const Projects = () => {
  return (
    <MainShell>
      <Shell>
        <Section title={STORY.projects}>
          <Main />
          <Space24 />
        </Section>
        <Gallery />
      </Shell>
    </MainShell>
  );
};
