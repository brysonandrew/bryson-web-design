import { useApp } from '@brysonandrew/app';
import { THrMotionProps } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = THrMotionProps;
export const ThinLine: FC<TProps> = ({
  classValue,
  children,
  style,
  ...props
}) => {
  const { COLOR } = useApp();

  return (
    <motion.hr
      className={cx('border w-full', classValue)}
      style={{ ...style, borderColor: COLOR.primary }}
      {...props}
    />
  );
};
