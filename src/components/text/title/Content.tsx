import { TextXl } from '@components/text/TextXl';
import { ThinLineGrow } from '@components/thin-line/ThinLineGrow';
import { MOTION_CONFIG } from '@constants/animation';
import type { TChildren } from '@t/index';
import { motion } from 'framer-motion';
import { type FC } from 'react';

type TProps = { children: TChildren };
export const Content: FC<TProps> = ({ children }) => {
  return (
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
  );
};
