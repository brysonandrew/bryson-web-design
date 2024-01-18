import type { FC } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import clsx from 'clsx';
import { TClassValueProps } from 'lib/types/dom/main';

type TProps = HTMLMotionProps<'hr'> & TClassValueProps;
export const ThickLine: FC<TProps> = ({
  classValue,
  ...props
}) => {
  return (
    <motion.hr
      className={clsx(
        'absolute bg-secondary',
        classValue,
      )}
      {...props}
    />
  );
};
