import { Main } from './Main';
import { Section } from '@components/Section';
import { SECTION_TITLES } from '@app/routes/app';
import { P60Y } from '@components/space/P60Y';

export const Contact = () => {
  return (
    <Section title={SECTION_TITLES.contact}>
      <Main />
      <P60Y />
    </Section>
  );
};
