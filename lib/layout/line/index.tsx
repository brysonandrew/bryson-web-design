import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
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
      className={clsx(
        'border border-secondary w-full',
        classValue,
      )}
      {...rest}
    />
  );
};
