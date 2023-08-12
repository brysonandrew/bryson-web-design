import { TitleRoot } from '@components/spaces/TitleRoot';
import { ThinLine } from '@components/thin-line';
import { ThinLineGrow } from '@components/thin-line/ThinLineGrow';
import { MOTION_CONFIG } from '@constants/animation';
import type { TChildren } from '@t/index';
import { motion } from 'framer-motion';
import { type FC } from 'react';

type TProps = { children: TChildren };
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
      <div className='overflow-hidden w-3/4'>
        <ThinLine
          classValue='relative'
          style={{
            bottom: '-1.4rem',
            backgroundColor: 'var(--baby-blue)',
          }}
        />
        <ThinLineGrow delay={0.2} />
      </div>
    </TitleRoot>
  );
};
