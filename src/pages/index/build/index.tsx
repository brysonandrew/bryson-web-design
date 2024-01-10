import { INTRO_ID } from '@main/config/constants';
import type { FC } from 'react';
import { Images } from './images';
import { Section } from '@components/Section';
import { Fake3D } from '@components/fake-3d';
import { FAKE_3D_PROPS } from './constants';
import { Provider } from '@context/domains/build/Provider';
import { Fade } from './Fade';
import { motion } from 'framer-motion';
import { Title } from './title';

const Build: FC = () => {
  return (
    <Fake3D {...FAKE_3D_PROPS}>
      {(props) => (
        <Section
          id={INTRO_ID}
          title={
            <>
              <Fade />
              <motion.div className='relative w-core row-wrap justify-center gap-4 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl'>
                <Title />
              </motion.div>
            </>
          }
        >
          <Provider>
            <Images {...props} />
          </Provider>
        </Section>
      )}
    </Fake3D>
  );
};

export default Build;
