import type { FC } from 'react';
import { STAR_ICON } from '@brysonandrew/base/icons/constants/general';
import { I } from '@brysonandrew/base/icons/icon';
import { motion } from 'framer-motion';
import { TDivMotionProps } from '@brysonandrew/base/types';

type TProps = { isLarge?: boolean } & TDivMotionProps;
export const Logo: FC<TProps> = ({ isLarge, ...props }) => {
  const size = isLarge ? 180 : 20;
  return (
    <motion.div {...props}>
      <I icon={STAR_ICON} width={size} height={size} />
    </motion.div>
  );
};
