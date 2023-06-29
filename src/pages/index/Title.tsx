import { InView } from '@components/InView';
import { ThinLineGap } from '@components/ThinLineGap';
import { TextXl } from '@components/text/TextXl';
import { MOTION_CONFIG } from '@constants/animation';
import { WIDTH_CLASS } from '@styles/styles';
import type { TChildren } from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
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
        <>
          <div className='overflow-hidden'>
            <motion.div
              initial={false}
              animate={{ y: isInView ? '0%' : '100%' }}
              transition={{
                ...MOTION_CONFIG.transition,
                delay: 0.2,
              }}
            >
              <TextXl classValue='text-center'>
                {children}
              </TextXl>
            </motion.div>
          </div>
          <motion.div
            className='overflow-hidden w-full flex justify-center items-center'
            initial={false}
            animate={{ scaleX: isInView ? 1 : 0 }}
          >
            <ThinLineGap />
          </motion.div>
        </>
      )}
    </InView>
  );
};
