import { motion } from 'framer-motion';
import { TRANSITION } from '@constants/animation';
import { FC } from 'react';
import { Space } from '@components/spaces/Space';
import { ThinLine } from '@components/thin-line';
import { TBaseIconProps } from '@t/icons';
import { Space1_5 } from '@components/spaces/Space1_5';

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
      <Space />
      <div className='relative row z-50'>
        {Icon && (
          <>
            <Icon classValue='text-color' />
            <Space1_5 />
          </>
        )}
        <motion.code
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ...TRANSITION, delay: 0.4 },
          }}
          className='text-color-1 text-xl whitespace-nowrap'
        >
          {children}
        </motion.code>
        <ThinLine classValue='absolute left-0 -bottom-1 w-full' />
      </div>
      <Space />
    </>
  );
};
