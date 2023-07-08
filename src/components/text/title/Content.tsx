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
      <div>
        <motion.div
          key='TITLE_TEXT'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            ...MOTION_CONFIG.transition,
            delay: 0.1,
          }}
        >
          <TextXl classValue='text-center'>
            {children}
          </TextXl>
        </motion.div>
      </div>
      <div className='overflow-hidden w-3/4'>
        <ThinLineGrow />
      </div>
    </>
  );
};
