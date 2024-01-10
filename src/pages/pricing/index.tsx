import { SECTION_TITLES } from '@app/routes/app';
import { Section } from '@components/Section';
import { FC } from 'react';
import { Main } from './Main';
import { P60Y } from '@components/space/P60Y';

export const Pricing: FC = () => {
  return (
    <Section title={SECTION_TITLES.services}>
      <Main />
      <P60Y />
    </Section>
  );
};
