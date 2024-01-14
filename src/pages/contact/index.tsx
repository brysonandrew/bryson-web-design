import { Main } from './Main';
import { Section } from '@lib/components/layout/Section';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { P60Y } from '@lib/components/layout/space/P60Y';

export const Contact = () => {
  return (
    <Section title={SECTION_RECORD.contact}>
      <Main />
      <P60Y />
    </Section>
  );
};
