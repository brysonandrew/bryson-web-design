import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@brysonandrew/base/components/layout/section';
import { Parallax } from '@brysonandrew/parallax';
import { FAKE_3D_PROPS } from './constants';
import { Provider } from '@pages/index/build/context/Provider';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Title } from './Title';

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
