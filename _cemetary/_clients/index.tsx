import { Fake3D } from '@components/fake-3d';
import { List } from './list';
import { STORY } from '@constants/copy';
import { FAKE_3D_PROPS } from './constants';
import { Section } from '@components/Section';

export const Clients = () => {
  return (
    <Section
      title={STORY.clients}
      classValue='items-center z-10'
    >
      <Fake3D {...FAKE_3D_PROPS}>
        {(props) => <List {...props} />}
      </Fake3D>
    </Section>
  );
};
