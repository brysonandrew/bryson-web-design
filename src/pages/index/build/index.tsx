import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@brysonandrew/layout/section';
import { Parallax } from '@brysonandrew/parallax';
import { PARALLAX_PROPS } from './config/constants';
import { BuildProvider } from '@pages/index/build/BuildProvider';
import { Title } from './Title';
import { SECTION_RECORD } from '@app/routes';

const Build: FC = () => {
  return (
    <Parallax {...PARALLAX_PROPS}>
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
