import { TAnchorMotionProps } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes/resolveInteractiveLabels';

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
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      <>{children}</>
    </motion.a>
  );
};
