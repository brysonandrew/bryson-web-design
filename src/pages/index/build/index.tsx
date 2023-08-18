import { SECTION_TITLES} from '@constants/copy';
import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@components/Section';
import { Fake3D } from '@components/fake-3d';
import { FAKE_3D_PROPS } from './constants';

export const Build: FC = () => {
  return (
    <Section title={SECTION_TITLES.build}>
      <Fake3D
        {...FAKE_3D_PROPS}
      >
        {(props) => <Images {...props} />}
      </Fake3D>
    </Section>
  ); 
};
