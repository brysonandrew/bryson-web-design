import type { FC } from 'react';
import { STAR_ICON } from '@lib/constants/icons/constants/general';
import { I } from '@lib/icons/icon';
import { motion } from 'framer-motion';

type TProps = { isLarge?: boolean };
export const Logo: FC<TProps> = ({ isLarge }) => {
  return (
    <motion.div
      layoutId='LOGO'
      className='text-main'
      animate={{ scale: isLarge ? 8 : 1 }}
    >
      <I icon={STAR_ICON} />
    </motion.div>
  );
};
