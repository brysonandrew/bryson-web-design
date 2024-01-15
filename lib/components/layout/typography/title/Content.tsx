import { ThinLine } from '@lib/components/decoration/line';
import { ThinLineGrow } from '@lib/components/decoration/line/ThinLineGrow';
import { MOTION_CONFIG } from '@lib/animation/constants';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TContent } from './config';
import { TitleRoot } from '@lib/components/layout/space/TitleRoot';

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
        <h3 className='page-title text-center text-3xl md:text-4xl lg:text-5xl'>{children}</h3>
      </motion.div>
      <div className='relative overflow-hidden w-5/6 top-4 h-4'>
        <ThinLine classValue='absolute left-0 w-full top-0 via-accent glow' />
        <ThinLineGrow
          delay={0.2}
          classValue='absolute left-0 w-full top-1 via-current'
        />
      </div>
    </TitleRoot>
  );
};
