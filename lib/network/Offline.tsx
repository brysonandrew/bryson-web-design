import type { FC } from 'react';
import { motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@brysonandrew/lib/animation/constants';
import { I } from '@brysonandrew/lib/icons/icon';
import { OFFLINE_ICON } from '@brysonandrew/lib/icons/constants/base';

export const Offline: FC = () => {
  return (
    <motion.div
      className='row gap-1 uppercase pl-1 pr-2.5 py-0.5'
      layout='position'
      {...PRESENCE_OPACITY}
    >
      <I
        width={20}
        height={20}
        icon={OFFLINE_ICON}
        inline
      />
      <div>
        <span>You are</span> <strong>offline</strong>
      </div>
    </motion.div>
  );
};
