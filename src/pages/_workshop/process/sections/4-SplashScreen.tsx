import { Price } from '../website/breakdown/Price';
import { Skeleton } from '../website/skeleton';
import { ParagraphLines } from '../website/layouts/ParagraphLines';
import { Section } from '../Section';
import { SPLASH_SCREEN_COST } from '../website/config';
import { Annotations } from '../website/layouts/Annotations';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Logo } from '../website/skeleton/header/Logo';
import { Provider } from '../website/skeleton/context/Provider';
import { PRESENCE_OPACITY } from '@lib/animation/constants';

export const SplashScreen = () => {
  const [isSplashScreen, setSplashScreen] = useState(false);

  return (
    <Section title='Upgrade: Splash Screen'>
      <ParagraphLines
        lines={[
          'Start off on the right foot with an animated splash screen.',
        ]}
      />
      <Annotations
        breakdown={
          <div className='column-stretch gap-4'>
            <Price>{SPLASH_SCREEN_COST}</Price>
          </div>
        }
        diagram={
          <motion.button
            className='relative w-full'
            onTap={() => setSplashScreen((prev) => !prev)}
          >
            <motion.div
              animate={{ opacity: isSplashScreen ? 0 : 1 }}
            >
              <Provider isSplashScreen={isSplashScreen}>
                <Skeleton />
              </Provider>
            </motion.div>
            {isSplashScreen && (
              <motion.div
                className='fill bg-main center border-white border-1'
                {...PRESENCE_OPACITY}
              >
                <Logo isLarge />
              </motion.div>
            )}
          </motion.button>
        }
      />
    </Section>
  );
};
