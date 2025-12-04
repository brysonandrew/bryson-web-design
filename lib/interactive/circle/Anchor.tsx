import { TAnchorMotionProps } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityTitles';
import { cx } from 'class-variance-authority';

type TProps = TAnchorMotionProps;
export const Anchor: FC<TProps> = ({
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <motion.a
      className={cx('circle-interactive', classValue)}
      {...resolveAccessibilityTitles(title)}
      {...props}
    >
      <>{children}</>
    </motion.a>
  );
};
