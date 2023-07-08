import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { STORY } from '@constants/copy';
import { Section } from '@components/Section';
import { Space16 } from '@components/spaces/Space16';

export const Projects = () => {
  return (
    <MainShell>
      <Shell>
        <Section title={STORY.projects}>
          <Main />
          <Space16 />
        </Section>
      </Shell>
    </MainShell>
  );
};
