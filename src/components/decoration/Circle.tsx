import { TDivMotionProps } from '@t/dom';
import { TChildren, TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TDivMotionProps &
  TClassValueProps & {
    children: TChildren | number;
    isActive: boolean;
  };
export const Circle: FC<TProps> = ({
  isActive,
  classValue,
  children,
  ...props
}) => {
  return (
    <motion.div
      className={clsx(
        'w-5 h-5 center rounded-full bg-main text-main font-slab text-xs border-gray border',
        isActive && 'glow-teal',
        classValue,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
  {/* <motion.svg
            className='relative'
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 10, 10],
              opacity: [0, 1, 1],
            }}
            transition={{ duration: 2 }}
            viewBox='0 0 100 100'
            width='24'
            height='24'
            fill='red'
            style={{ zIndex: 9999 }}
          >
            <circle r='50' cx='25' cy='25' />
          </motion.svg> */}