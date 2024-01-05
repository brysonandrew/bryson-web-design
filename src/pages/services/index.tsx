import { Main } from './Main';
import { SECTION_TITLES } from '@constants/copy';
import { Section } from '@components/Section';
import { P60Y } from '@components/space/P60Y';
import { P6 } from '@components/space/P6';

export const Services = () => {
  return (
    <>
      <Section title={SECTION_TITLES.services}>
        <P6 />
        <Main />
        <P60Y />
      </Section>
    </>
  );
};
