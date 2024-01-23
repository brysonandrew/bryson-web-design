import { Parallax } from '@brysonandrew/parallax';
import { FAKE_3D_PROPS } from './config/constants';
import { Links } from './links';
import { Section } from '@brysonandrew/layout/section';
import { SECTION_RECORD } from '@app/routes';

const Tech = () => (
  <Section title={SECTION_RECORD.tech}>
    <Parallax {...FAKE_3D_PROPS}>
      {(props) => <Links {...props} />}
    </Parallax>
  </Section>
);

export default Tech;
