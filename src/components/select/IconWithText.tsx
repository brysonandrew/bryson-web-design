import { motion } from 'framer-motion';
import { FC } from 'react';
import { P_5 } from '@components/space/P_5';
import { ThinLine } from '@components/thin-line';
import { TBaseIconProps } from '@t/icons';
import { TRANSITION } from '@constants/animation';
import { P1 } from '@components/space/P1';

type TProps = {
  children: string;
  Icon?: FC<TBaseIconProps>;
};
export const IconWithText: FC<TProps> = ({
  Icon,
  children,
}) => {
  return (
    <>
      <P_5 />
      <motion.div className='relative text-color-5 row z-50'>
        {Icon && (
          <>
            <Icon classValue='w-4 h-4' />
            <P1 />
          </>
        )}
        <motion.code
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ...TRANSITION, delay: 0.4 },
          }}
          className='text-xl whitespace-nowrap'
        >
          {children}
        </motion.code>
        <ThinLine classValue='absolute left-0 bottom-0 w-full' />
      </motion.div>
      <P_5 />
    </>
  );
};
