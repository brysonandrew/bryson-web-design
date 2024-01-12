import { Main } from './Main';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Section } from '@components/layout/Section';
import { P60Y } from '@components/layout/space/P60Y';
import { P6 } from '@components/layout/space/P6';

export const Process = () => {
  return (
    <>
      <Section title={SECTION_RECORD.build}>
        <P6 />
        <Main />
        <P60Y />
      </Section>
    </>
  );
};
