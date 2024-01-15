import { Parallax } from '@lib/animation/components/parallax';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { FAKE_3D_PROPS } from './config/constants';
import { Links } from './links';
import { Section } from '@lib/components/layout/Section';

const Tech = () => (
  <Section title={SECTION_RECORD.tech}>
    <Parallax {...FAKE_3D_PROPS}>
      {(props) => <Links {...props} />}
    </Parallax>
  </Section>
);

export default Tech;
