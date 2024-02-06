import { TBlankMotionC } from '@brysonandrew/layout/blank/config/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const BlankMotion: TBlankMotionC = ({
  dark,
  ...props
}) => {
  const { classValue: darkClassValue, ...darkRest } =
    dark ?? props;
  const { classValue, ...rest } = props;
  return (
    <>
      <motion.div
        className={clsx('opacity-dark', darkClassValue)}
        {...darkRest}
      />
      <motion.div
        className={clsx('opacity-light', classValue)}
        {...rest}
      />
    </>
  );
};
