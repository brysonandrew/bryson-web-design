import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@lib/components/layout/Section';
import { Parallax } from '@lib/components/animation/parallax';
import { FAKE_3D_PROPS } from './constants';
import { Provider } from '@pages/index/build/context/Provider';
import { Fade } from './Fade';
import { motion } from 'framer-motion';
import { Animation as Title } from '@lib/components/layout/typography/animation';
import { SECTION_RECORD } from '@app/routes/constants/index-sections';

const Build: FC = () => {
  return (
    <Parallax {...FAKE_3D_PROPS}>
      {(props) => (
        <Section
          title={
            <motion.div className='relative w-core row-wrap justify-center gap-4 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl'>
              <Title>{SECTION_RECORD.build}</Title>
            </motion.div>
          }
        >
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
