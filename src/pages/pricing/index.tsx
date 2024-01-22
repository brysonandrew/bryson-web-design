import { PAGE_RECORD } from '@app/routes/constants/pages';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Section } from '@brysonandrew/base/components/layout/section';
import { FC } from 'react';
import { Main } from './Main';
import { P60Y } from '@brysonandrew/base/components/layout/space/P60Y';
import { Process } from '@pages/pricing/process';
import { P24Y } from '@brysonandrew/base/components/layout/space/P24Y';

export const Pricing: FC = () => {
  return (
    <Section
      title={SECTION_RECORD[PAGE_RECORD.pricing.key]}
    >
      <Main />
      <P24Y />
      <Process/>
      <P60Y />
    </Section>
  );
};
