import { Price } from '../website/breakdown/Price';
import { Skeleton } from '../website/skeleton';
import { ParagraphLines } from '../website/layouts/ParagraphLines';
import { Section } from '../Section';
import { SPLASH_SCREEN_COST } from '../website/config';
import { Annotations } from '../website/layouts/Annotations';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Logo } from '../website/skeleton/header/logo';
import { Provider } from '../website/skeleton/context/Provider';
import { PRESENCE_OPACITY } from '@lib/animation/constants';
import { SKELETON_LOGO_LAYOUT_ID } from '../website/skeleton/header/logo/constants';

export const SplashScreen = () => {
  const [isSplashScreen, setSplashScreen] = useState(true);

  return (
    <Section title='Upgrade: Splash Screen'>
      <ParagraphLines
        lines={[
          'Make a good first impression.',
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
            <AnimatePresence initial={false} mode='wait'>
              {isSplashScreen && (
                <motion.div
                  key='SPLASH_SCREEN'
                  className='fill bg-main center border-white border-1'
                  {...PRESENCE_OPACITY}
                >
                  <Logo
                    isLarge
                    layoutId={SKELETON_LOGO_LAYOUT_ID}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        }
      />
    </Section>
  );
};
