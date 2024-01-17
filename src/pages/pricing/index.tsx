import { PAGE_RECORD } from '@app/routes/constants/pages';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Section } from '@lib/components/layout/section';
import { FC } from 'react';
import { Main } from './Main';
import { P60Y } from '@lib/components/layout/space/P60Y';

export const Pricing: FC = () => {
  return (
    <Section
      title={SECTION_RECORD[PAGE_RECORD.pricing.key]}
    >
      <Main />
      <P60Y />
    </Section>
  );
};
