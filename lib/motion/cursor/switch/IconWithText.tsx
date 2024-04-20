import { motion } from 'framer-motion';
import { FC } from 'react';
import { TChildren } from '@brysonandrew/config-types/dom/main';
import { PRESENCE_OPACITY_ANIMATE_DELAY_04 } from '@brysonandrew/motion-core';
import { TSvgProps } from '@brysonandrew/config-types';
import { I } from '@brysonandrew/icons-i';

type TProps = {
  children: TChildren;
  Icon?: FC<TSvgProps>;
  iconStr?: string | null;
};
export const IconWithText: FC<TProps> = ({
  Icon,
  iconStr,
  children,
}) => {
  return (
    <motion.div className='relative text-2xl row gap-1.5 z-50'>
      {iconStr && (
        <I classValue='text-current' icon={iconStr} />
      )}
      {Icon && <Icon classValue='w-4 h-4' />}
      <motion.div
        className='whitespace-nowrap'
        {...PRESENCE_OPACITY_ANIMATE_DELAY_04}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
