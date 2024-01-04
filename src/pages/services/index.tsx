import { Main } from './Main';
import { SECTION_TITLES } from '@constants/copy';
import { Section } from '@components/Section';
import { P60Y } from '@components/space/P60Y';
import { PersistHeight } from '@components/space/PersistHeight';

export const Services = () => {
  return (
    <>
      <Section title={SECTION_TITLES.services}>
        <PersistHeight>
          <Main />
        </PersistHeight>
        <P60Y />
      </Section>
    </>
  );
};
