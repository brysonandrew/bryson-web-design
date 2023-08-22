import { INTRO_ID, SECTION_TITLES } from '@constants/copy';
import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@components/Section';
import { Fake3D } from '@components/fake-3d';
import { FAKE_3D_PROPS } from './constants';
import { Provider } from '@context/domains/build/Provider';

const Build: FC = () => {
  return (
    <Section id={INTRO_ID} title={SECTION_TITLES.build}>
      <Fake3D {...FAKE_3D_PROPS}>
        {(props) => (
          <Provider>
            <Images {...props} />
          </Provider>
        )}
      </Fake3D>
    </Section>
  );
};

export default Build;
