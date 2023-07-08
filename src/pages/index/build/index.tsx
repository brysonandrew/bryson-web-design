import { STORY } from '@constants/copy';
import type { FC } from 'react';
import { Fake3D } from '@components/fake-3d';
import { Images } from './images';
import { Section } from '@components/Section';
import { FAKE_3D_PROPS } from './constants';

export const Build: FC = () => {
  return (
    <Section title={STORY.build}>
      <Fake3D
        inViewOptions={{ once: true }}
        {...FAKE_3D_PROPS}
      >
        {(props) => <Images {...props} />}
      </Fake3D>
    </Section>
  );
};
