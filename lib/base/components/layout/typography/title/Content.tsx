import { ThinLineGrow } from '@brysonandrew/base/components/layout/line/ThinLineGrow';
import { MOTION_CONFIG } from '@brysonandrew/animation/config/constants';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TitleSpace } from '@brysonandrew/base/components/layout/space/TitleSpace';
import clsx from 'clsx';
import { TChildrenString } from '@brysonandrew/types/dom';

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
        <h3
          className={clsx(
            'title-page text-center text-3xl md:text-4xl lg:text-5xl',
          )}
        >
          {children}
        </h3>
      </motion.div>
      <div className='relative w-5/6'>
        <ThinLineGrow
          delay={0.2}
          classValue='absolute left-0 w-full top-1 via-current'
        />
      </div>
    </TitleSpace>
  );
};
