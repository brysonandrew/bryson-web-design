import type { FC } from 'react';
import { STAR_ICON } from '@brysonandrew/icons/config/constants/general';
import { I } from '@brysonandrew/icons/icon';
import { motion } from 'framer-motion';
import { TDivMotionProps } from '@brysonandrew/config/types';

type TProps = { isLarge?: boolean } & TDivMotionProps;
export const Logo: FC<TProps> = ({ isLarge, ...props }) => {
  const size = isLarge ? 180 : 20;
  return (
    <motion.div {...props}>
      <I icon={STAR_ICON} width={size} height={size} />
    </motion.div>
  );
};
