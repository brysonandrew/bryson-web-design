import { Section } from '@brysonandrew/layout-section';
import { FC } from 'react';
import { Main } from './Main';
import { P60Y } from '@brysonandrew/space/P60Y';
import { SECTION_RECORD, PAGE_RECORD } from '@app/routes';

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
