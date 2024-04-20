import { ThinLineGrow } from '@brysonandrew/layout-line/ThinLineGrow';
import { MOTION_CONFIG } from '@brysonandrew/motion-core';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TitleSpace } from '@brysonandrew/space/TitleSpace';
import clsx from 'clsx';
import { TChildrenString } from '@brysonandrew/config-types/dom';

type TProps = TChildrenString;
export const Content: FC<TProps> = ({ children }) => {
  return (
    <TitleSpace>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{
          ...MOTION_CONFIG.transition,
          delay: 0.2,
        }}
      >
        <h3 className='title-page text-center'>
          {children}
        </h3>
      </motion.div>
      <div className='relative w-1/6'>
        <ThinLineGrow
          delay={0.2}
          classValue='absolute left-0 w-full top-1 opacity-50'
        />
      </div>
    </TitleSpace>
  );
};
