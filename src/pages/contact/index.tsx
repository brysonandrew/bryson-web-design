import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { Section } from '@components/Section';
import { STORY, TITLE_BASE } from '@constants/copy';
import { useHtmlTitle } from '@hooks/useHtmlTitle';

export const Contact = () => {
  useHtmlTitle(`${TITLE_BASE} - Contact`);
  return (
    <MainShell>
      <Shell>
        <Section title={STORY.contact}>
          <Main />
        </Section>
      </Shell>
    </MainShell>
  );
};

