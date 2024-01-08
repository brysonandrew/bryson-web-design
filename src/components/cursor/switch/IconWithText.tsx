import { motion } from 'framer-motion';
import { FC } from 'react';
import { P_5 } from '@components/space/P_5';
import { ThinLine } from '@components/line';
import { TBaseIconProps } from '@t/icons';
import { TRANSITION } from '@constants/animation';
import { P1 } from '@components/space/P1';
import { TChildren } from '@t/index';

type TProps = {
  children: TChildren;
  Icon?: FC<TBaseIconProps>;
};
export const IconWithText: FC<TProps> = ({
  Icon,
  children,
}) => {
  return (
    <>
      <P_5 />
      <motion.div className='relative text-main row z-50'>
        {Icon && (
          <>
            <Icon classValue='w-4 h-4' />
            <P1 />
          </>
        )}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ...TRANSITION, delay: 0.4 },
          }}
          className='text-xl whitespace-nowrap'
        >
          {children}
        </motion.p>
        {/* <ThinLine classValue='absolute left-0 bottom-0 w-full via-current' /> */}
      </motion.div>
      <P_5 />
    </>
  );
};
