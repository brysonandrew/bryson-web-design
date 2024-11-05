import { TBlankMotionC } from '@brysonandrew/layout-blank/config/types';
import { cx } from 'class-variance-authority';
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
        className={cx('opacity-dark', darkClassValue)}
        {...darkRest}
      />
      <motion.div
        className={cx('opacity-light', classValue)}
        {...rest}
      />
    </>
  );
};
