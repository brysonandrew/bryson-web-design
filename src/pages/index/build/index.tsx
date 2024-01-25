import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@brysonandrew/layout/section';
import { Parallax } from '@brysonandrew/parallax';
import { FAKE_3D_PROPS } from './config/constants';
import { BuildProvider } from '@pages/index/build/BuildProvider';
import { Title } from './Title';
import { SECTION_RECORD } from '@app/routes';

const Build: FC = () => {
  return (
    <Parallax {...FAKE_3D_PROPS}>
      {(props) => (
        <Section title={SECTION_RECORD.build} Title={Title}>
          <BuildProvider>
            <Images {...props} />
          </BuildProvider>
        </Section>
      )}
    </Parallax>
  );
};

export default Build;
