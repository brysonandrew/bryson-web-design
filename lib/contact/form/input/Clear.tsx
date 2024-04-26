import { motion } from 'framer-motion';
import type { FC } from 'react';
import { TButtonMotionProps } from '@brysonandrew/config-types/dom';
import { CROSS_ICON } from '@brysonandrew/icons-keys';
import { I } from '@brysonandrew/icons-i';

type TProps = TButtonMotionProps;
export const Clear: FC<TProps> = (props) => {
  return (
    <div className='_contact_clear'>
      <motion.button
        layout
        tabIndex={-1}
        type='button'
        className='_contact_clear-button'
        {...props}
      >
        <I classValue='clear-icon' icon={CROSS_ICON} />
      </motion.button>
    </div>
  );
};
