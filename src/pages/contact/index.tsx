import { Main } from './Main';
import { Section } from '@brysonandrew/base/components/layout/section';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { P60Y } from '@brysonandrew/base/components/layout/space/P60Y';

export const Contact = () => {
  return (
    <Section title={SECTION_RECORD.contact}>
      <Main />
      <P60Y />
    </Section>
  );
};
