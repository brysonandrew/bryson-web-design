import type { FC } from 'react';
import { TDivMotionProps } from '@t/dom';
import { DURATION } from '@constants/animation';
import { motion } from 'framer-motion';
import { MetalGlow } from '@components/metal/MetalGlow';
import { useCurrName } from '@hooks/params/useCurrName';
import { useDarkMode } from '@context/dark-mode';

type TProps = TDivMotionProps;
export const Background: FC<TProps> = (props) => {
  const {isDarkMode} = useDarkMode()
  const name = useCurrName();
  const isGallery = Boolean(name);
  return (
    <div className='absolute w-10 h-10 pointer-events-none'>
      <MetalGlow
        drop={4}
        isDarkest
        color={isGallery && isDarkMode ? 'baby-blue' : 'teal'}
        classValue='rounded-full'
      />
      <motion.div
        className='absolute inset-0 rounded-full bg-baby-blue-02'
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0.2 }}
        transition={{ duration: DURATION * 3 }}
        {...props}
      />
    </div>
  );
};
