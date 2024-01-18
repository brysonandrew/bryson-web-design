import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@brysonandrew/lib/components/layout/section';
import { Parallax } from '@brysonandrew/lib/animation/components/parallax';
import { FAKE_3D_PROPS } from './constants';
import { Provider } from '@pages/index/build/context/Provider';
import { Fade } from './Fade';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';
import { Title } from './Title';

const Build: FC = () => {
  return (
    <Parallax {...FAKE_3D_PROPS}>
      {(props) => (
        <Section title={SECTION_RECORD.build} Title={Title}>
          <Fade />
          <Provider>
            <Images {...props} />
          </Provider>
        </Section>
      )}
    </Parallax>
  );
};

export default Build;
