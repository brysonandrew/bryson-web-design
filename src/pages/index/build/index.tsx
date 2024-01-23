import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@brysonandrew/layout/section';
import { Parallax } from '@brysonandrew/parallax';
import { FAKE_3D_PROPS } from './constants';
import { Provider } from '@pages/index/build/context/Provider';
import { Title } from './Title';
import { SECTION_RECORD } from '@app/routes';

const Build: FC = () => {
  return (
    <Parallax {...FAKE_3D_PROPS}>
      {(props) => (
        <Section title={SECTION_RECORD.build} Title={Title}>
          <Provider>
            <Images {...props} />
          </Provider>
        </Section>
      )}
    </Parallax>
  );
};

export default Build;
