import { Main } from './Main';
import { Section } from '@components/Section';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { P60Y } from '@components/space/P60Y';

export const Contact = () => {
  return (
    <Section title={SECTION_RECORD.contact}>
      <Main />
      <P60Y />
    </Section>
  );
};
