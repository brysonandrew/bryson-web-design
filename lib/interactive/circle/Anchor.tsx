import { TAnchorMotionProps } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityTitles';

type TProps = TAnchorMotionProps;
export const Anchor: FC<TProps> = ({
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <motion.a
      className='circle-interactive'
      {...resolveAccessibilityTitles(title)}
      {...props}
    >
      <>{children}</>
    </motion.a>
  );
};
