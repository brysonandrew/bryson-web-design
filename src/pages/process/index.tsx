import { Main } from './Main';
import { SECTION_TITLES } from '@main/config/constants/app';
import { Section } from '@components/Section';
import { P60Y } from '@components/space/P60Y';
import { P6 } from '@components/space/P6';

export const Process = () => {
  return (
    <>
      <Section title={SECTION_TITLES.process}>
        <P6 />
        <Main />
        <P60Y />
      </Section>
    </>
  );
};
