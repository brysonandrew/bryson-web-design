import { ThinLine } from '@components/line';
import { ThinLineGrow } from '@components/line/ThinLineGrow';
import { MOTION_CONFIG } from '@constants/animation';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TContent } from './config';
import { TitleRoot } from '@components/space/TitleRoot';

type TProps = { children: TContent };
export const Content: FC<TProps> = ({ children }) => {
  return (
    <TitleRoot>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{
          ...MOTION_CONFIG.transition,
          delay: 0,
        }}
      >
        <h3 className='++text text-center text-4xl md:text-5xl lg:text-6xl'>{children}</h3>
      </motion.div>
      <div className='relative overflow-hidden w-5/6 top-4 h-4'>
        <ThinLine classValue='absolute left-0 w-full top-0 via-baby-blue glow' />
        <ThinLineGrow
          delay={0.2}
          classValue='absolute left-0 w-full top-1 via-current'
        />
      </div>
    </TitleRoot>
  );
};
