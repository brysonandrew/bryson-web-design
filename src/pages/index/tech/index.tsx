import { Fake3D } from '@components/fake-3d';
import { SECTION_TITLES, TECH_ID } from '@constants/copy';
import { FAKE_3D_PROPS } from './constants';
import { Links } from './links';
import { Section } from '@components/Section';

const Tech = () => (
  <Section id={TECH_ID} title={SECTION_TITLES.tech}>
    <Fake3D {...FAKE_3D_PROPS}>
      {(props) => <Links {...props} />}
    </Fake3D>
  </Section>
);

export default Tech;
