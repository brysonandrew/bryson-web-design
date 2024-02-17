import { useApp } from '@brysonandrew/app';
import { THrMotionProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
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
      className={clsx('border w-full', classValue)}
      style={{ ...style, borderColor: COLOR.primary }}
      {...props}
    />
  );
};
