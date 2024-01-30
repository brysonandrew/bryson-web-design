import { motion } from 'framer-motion';
import { FC } from 'react';
import { P_5 } from '@brysonandrew/space/P_5';
import { TChildren } from '@brysonandrew/types/dom/main';
import { I } from '@brysonandrew/icons/icon';
import { TBaseIconProps } from '@brysonandrew/icons/type';
import { PRESENCE_OPACITY_ANIMATE_DELAY_04 } from '@brysonandrew/animation';

type TProps = {
  children: TChildren;
  Icon?: FC<TBaseIconProps>;
  iconStr?: string | null;
};
export const IconWithText: FC<TProps> = ({
  Icon,
  iconStr,
  children,
}) => {
  return (
    <>
      <P_5 />
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
      <P_5 />
    </>
  );
};
