import { motion } from 'framer-motion';
import { TRANSITION } from '@constants/animation';
import { FC } from 'react';
import { Space } from '@components/spaces/Space';
import { ThinLine } from '@components/thin-line';
import { TBaseIconProps } from '@t/icons';
import { Space2 } from '@components/spaces/Space2';

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
      <motion.div
        layout
        className='relative text-color-5 row z-50'
      >
        {Icon && (
          <>
            <Icon />
            <Space />
          </>
        )}
        <motion.code
          layout='size'
          // initial={{ opacity: 0 }}
          // animate={{
          //   opacity: 1,
          //   transition: { ...TRANSITION, delay: 0.4 },
          // }}
          className='text-2xl whitespace-nowrap'
        >
          {children}
        </motion.code>
        <ThinLine classValue='absolute left-0 -bottom-1 w-full' />
      </motion.div>
      <Space />
    </>
  );
};
