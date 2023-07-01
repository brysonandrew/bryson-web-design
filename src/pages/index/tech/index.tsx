import { Fake3D } from '@components/fake-3d';
import { STORY } from '@constants/copy';
import { FAKE_3D_PROPS } from './constants';
import { Links } from './links';
import { Section } from '@components/Section';

export const Tech = () => (
  <Section title={STORY.tech}>
    <Fake3D {...FAKE_3D_PROPS}>
      {(props) => <Links {...props} />}
    </Fake3D>
  </Section>
);
 