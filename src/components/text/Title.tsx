import { InView } from '@components/InView';
import { TextXl } from '@components/text/TextXl';
import { ThinLineGrow } from '@components/thin-line/ThinLineGrow';
import { MOTION_CONFIG } from '@constants/animation';
import { WIDTH_CLASS } from '@constants/styles';
import type { TChildren } from '@t/index';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { type FC } from 'react';

type TProps = { children: TChildren };
export const Title: FC<TProps> = ({ children }) => {
  return (
    <InView
      className={clsx(
        'flex flex-col items-center',
        WIDTH_CLASS,
      )}
      margin='-220px'
      once
    >
      {(isInView) => (
        <AnimatePresence initial={false}>
          {isInView && (
            <>
              <div className='overflow-hidden'>
                <motion.div
                  key='TITLE_TEXT'
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '100%' }}
                  transition={{
                    ...MOTION_CONFIG.transition,
                    delay: 0.8,
                  }}
                >
                  <TextXl classValue='text-center'>
                    {children}
                  </TextXl>
                </motion.div>
              </div>
              <ThinLineGrow />
            </>
          )}
        </AnimatePresence>
      )}
    </InView>
  );
};
