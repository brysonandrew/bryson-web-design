import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Main } from './Main';
import { Section } from '@components/Section';
import { SECTION_TITLES} from '@constants/copy';
import { Space60 } from '@components/spaces/Space60';

export const Contact = () => {
  return (
    <MainShell>
      <Shell>
        <Section title={SECTION_TITLES.contact}>
          <Main />
          <Space60 />
        </Section>
      </Shell>
    </MainShell>
  );
};
