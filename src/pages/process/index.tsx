import { Main } from './Main';
import { SECTION_RECORD } from '@app/routes/app';
import { Section } from '@components/Section';
import { P60Y } from '@components/space/P60Y';
import { P6 } from '@components/space/P6';

export const Process = () => {
  return (
    <>
      <Section title={SECTION_RECORD.process}>
        <P6 />
        <Main />
        <P60Y />
      </Section>
    </>
  );
};
