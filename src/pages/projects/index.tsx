import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { STORY, TITLE_BASE } from '@constants/copy';
import { Section } from '@components/Section';
import { useHtmlTitle } from '@hooks/useHtmlTitle';

export const Projects = () => {
  useHtmlTitle(`${TITLE_BASE} - Projects`);

  return (
    <MainShell>
      <Shell>
        <Section title={STORY.projects}>
          <Main />
        </Section>
      </Shell>
    </MainShell>
  );
};
