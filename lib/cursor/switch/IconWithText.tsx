import { motion } from 'framer-motion';
import { FC } from 'react';
import { P_5 } from '@lib/components/layout/space/P_5';
import { TRANSITION } from '@lib/animation/constants';
import { TChildren } from '@lib/types/dom/main';
import { I } from '@lib/icons/icon';
import { TBaseIconProps } from '@lib/icons/type';

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
      <motion.div className='relative text-main row gap-1.5 z-50'>
        {iconStr && (
          <I classValue='text-current' icon={iconStr} />
        )}
        {Icon && <Icon classValue='w-4 h-4' />}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ...TRANSITION, delay: 0.4 },
          }}
          className='text-xl whitespace-nowrap'
        >
          {children}
        </motion.div>
      </motion.div>
      <P_5 />
    </>
  );
};
