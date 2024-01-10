import { Fake3D } from '@components/fake-3d';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { FAKE_3D_PROPS } from './config/constants';
import { Links } from './links';
import { Section } from '@components/Section';

const Tech = () => (
  <Section title={SECTION_RECORD.tech}>
    <Fake3D {...FAKE_3D_PROPS}>
      {(props) => <Links {...props} />}
    </Fake3D>
  </Section>
);

export default Tech;
