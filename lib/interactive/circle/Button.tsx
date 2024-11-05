import { cx } from 'class-variance-authority';
import {
  TButtonMotionProps,
  TClassValueProps,
} from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityTitles';

export type TButtonProps = TButtonMotionProps &
  TClassValueProps;
export const Button: FC<TButtonProps> = ({
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <motion.button
      className={cx(
        'circle-interactive shrink-0 w-14 h-14',
        classValue,
      )}
      {...resolveAccessibilityTitles(title)}
      {...props}
    >
      <>{children}</>
    </motion.button>
  );
};
