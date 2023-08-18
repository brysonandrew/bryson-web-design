import { ThinLine } from '@components/thin-line';
import { ThinLineGrow } from '@components/thin-line/ThinLineGrow';
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
        key='TITLE_TEXT'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{
          ...MOTION_CONFIG.transition,
          delay: 0,
        }}
      >
        <h3 className='++text text-center'>{children}</h3>
      </motion.div>
      <div className='relative overflow-hidden w-3/4 top-4 h-4'>
        <ThinLine
          classValue='absolute left-0 w-full top-0'
          style={{
            bottom: '0',
            backgroundColor: 'var(--baby-blue)',
          }}
        />
        <ThinLineGrow
          delay={0.2}
          classValue='absolute left-0 w-full top-1'
        />
      </div>
    </TitleRoot>
  );
};
