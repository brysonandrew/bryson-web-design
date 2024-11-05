import type { FC } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { cx } from 'class-variance-authority';
import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { useApp } from '@brysonandrew/app';

type TProps = HTMLMotionProps<'hr'> & TClassValueProps;
export const ThickLine: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => {
  const { COLOR } = useApp();
  return (
    <motion.hr
      className={cx('absolute border-4', classValue)}
      style={{ ...style, borderColor: COLOR.primary }}
      {...props}
    />
  );
};
