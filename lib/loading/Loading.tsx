import {
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TClassValueProps &
  TDivMotionProps & {
    sizeClassValue?: string;
    borderSizeClassValue?: string;
  };
export const Loading: FC<TProps> = ({
  sizeClassValue = 'w-12 h-12',
  borderSizeClassValue = 'border-t-gray-1 border-2',
  classValue,
  children,
  ...props
}) => {
  return (
    <motion.div
      className={cx(
        'relative rounded-full shrink-0',
        classValue,
        sizeClassValue,
        borderSizeClassValue,
      )}
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
      {...props}
    />
  );
};
