import { motion } from 'framer-motion';
import { FC } from 'react';
import { Space_5 } from '@components/spaces/Space_5';
import { ThinLine } from '@components/thin-line';
import { TBaseIconProps } from '@t/icons';
import { Space } from '@components/spaces/Space';
import { TRANSITION } from '@constants/animation';

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
      <Space_5 />
      <motion.div className='relative text-color-5 row z-50'>
        {Icon && (
          <>
            <Icon classValue='w-4 h-4' />
            <Space />
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
      <Space_5 />
    </>
  );
};
