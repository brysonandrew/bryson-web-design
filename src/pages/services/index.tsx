import { Main } from './Main';
import { Section } from '@brysonandrew/layout-section';
import { P60Y } from '@brysonandrew/space/P60Y';
import { SECTION_RECORD } from '@app/routes';

export const Services = () => {
  return (
    <Section title={SECTION_RECORD.services}>
      <Main />
      <P60Y />
    </Section>
  );
}; 
