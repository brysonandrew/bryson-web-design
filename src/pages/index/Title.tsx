import { ThinLineGap } from '@components/ThinLineGap';
import { TextXl } from '@components/text/TextXl';
import { MOTION_CONFIG } from '@constants/animation';
import { WIDTH_CLASS } from '@styles/styles';
import type { TChildren } from '@t/index';
import clsx from 'clsx';
import { motion, useInView } from 'framer-motion';
import { useRef, type FC } from 'react';

type TProps = { children: TChildren };
export const Title: FC<TProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '-100px',
    once: true,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        'flex flex-col items-center',
        WIDTH_CLASS,
      )}
    >
      <div className='overflow-hidden'>
        <motion.div
          initial={false}
          animate={{ y: isInView ? '0%' : '100%' }}
          transition={{
            ...MOTION_CONFIG.transition,
            delay: 0.2,
          }}
        >
          <TextXl>{children}</TextXl>
        </motion.div>
      </div>
      <motion.div
        className='overflow-hidden w-full flex justify-center items-center'
        initial={false}
        animate={{ scaleX: isInView ? 1 : 0 }}
      >
        <ThinLineGap />
      </motion.div>
    </div>
  );
};
