import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { Section } from '@components/Section';
import { SECTION_TITLES} from '@constants/copy';
import { P60Y } from '@components/space/P60Y';

export const Contact = () => {
  return (
    <MainShell>
      <Shell>
        <Section title={SECTION_TITLES.contact}>
          <Main />
          <P60Y />
        </Section>
      </Shell>
    </MainShell>
  );
};
