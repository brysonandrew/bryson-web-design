import type { FC } from 'react';
import { TDivMotionProps } from '@lib/types/dom';
import { DURATION } from '@lib/animation/constants';
import { motion } from 'framer-motion';
import { useApp } from '@lib/context/app/useApp';

type TProps = TDivMotionProps;
export const Background: FC<TProps> = (props) => {
  const { BackgroundGlowCircle } = useApp();

  return (
    <div className='absolute w-10 h-10 pointer-events-none'>
      <BackgroundGlowCircle />
      <motion.div
        className='absolute inset-0 rounded-full bg-accent-02'
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0.2 }}
        transition={{ duration: DURATION * 3 }}
        {...props}
      />
    </div>
  );
};
