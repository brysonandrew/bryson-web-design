import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

type TProps = HTMLMotionProps<'hr'> & TClassValueProps;
export const ThinLine: FC<TProps> = ({
  classValue,
  
  ...props
}) => {
  const { style, ...rest } = props;
  return (
    <motion.hr
      className={clsx(
        'background-color-5 h-px w-full',
        classValue,
      )}
      style={{ opacity: 0.4, ...style }}
      variants={{ hover: { opacity: 0.2 } }}
      {...rest}
    />
  );
};
