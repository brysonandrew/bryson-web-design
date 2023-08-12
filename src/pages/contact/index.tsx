import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { Section } from '@components/Section';
import { STORY } from '@constants/copy';
import { Space60 } from '@components/spaces/Space60';

export const Contact = () => {
  return (
    <MainShell>
      <Shell>
        <Section title={STORY.contact}>
          <Main />
          <Space60 />
        </Section>
      </Shell>
    </MainShell>
  );
};
