import type { FC } from 'react';
import { I } from 'lib/icons';
import { motion } from 'framer-motion';
import { FEEDBACK_ICON } from 'lib/icons/constants/contact';

type TProps = { isHover: boolean };
export const FeedbackIcon: FC<TProps> = ({ isHover }) => {
  return (
    <motion.div
      className='relative'
      initial={false}
      animate={{ opacity: isHover ? 1 : 0.5 }}
    >
      <I
        classValue='absolute top-1/2 -translate-y-1/2 right-4 h-7 w-7 text-current'
        icon={FEEDBACK_ICON}
      />
    </motion.div>
  );
};
