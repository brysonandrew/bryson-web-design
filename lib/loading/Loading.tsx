import {
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/config-types';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TClassValueProps &
  TDivMotionProps & {
    sizeClassValue?: string;
    borderSizeClassValue?: string;
  };
export const Loading: FC<TProps> = ({
  sizeClassValue = 'icon-size border-2',
  borderSizeClassValue = 'border-t-gray-1',
  classValue,
  children,
  ...props
}) => {
  return (
    <motion.div
      className={clsx(
        'relative rounded-full border-gray shrink-0',
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
