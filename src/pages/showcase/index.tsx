import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { STORY } from '@constants/copy';
import { Section } from '@components/Section';

export const Showcase = () => {
  return (
    <MainShell>
      <Shell>
        <Section title={STORY.showcase}>
          <Main />
        </Section>
      </Shell>
    </MainShell>
  );
};
