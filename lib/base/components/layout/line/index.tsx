import { TClassValueProps } from '@brysonandrew/base/types/dom/main';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

type TProps = HTMLMotionProps<'hr'> & TClassValueProps;
export const ThinLine: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  const { style, ...rest } = props;
  return (
    <motion.hr
      className={clsx('bg-transparent bg-gradient-to-r from-transparent to-transparent h-px w-full', classValue)}
      style={{ opacity: 0.4, ...style }}
      variants={{ hover: { opacity: 0.2 } }}
      {...rest}
    />
  );
};
