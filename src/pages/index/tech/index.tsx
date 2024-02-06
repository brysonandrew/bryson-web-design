import { Parallax } from '@brysonandrew/parallax';
import { PARALLAX_PROPS } from './config/constants';
import { Links } from './links';
import { Section } from '@brysonandrew/layout-section';
import { SECTION_RECORD } from '@app/routes';

const Tech = () => (
  <Section title={SECTION_RECORD.tech}>
    <Parallax {...PARALLAX_PROPS}>
      {(props) => <Links {...props} />}
    </Parallax>
  </Section>
);

export default Tech;
