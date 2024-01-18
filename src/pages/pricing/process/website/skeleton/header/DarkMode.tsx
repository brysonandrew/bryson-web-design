import { Focus } from '@pages/pricing/process/focus';
import { I } from 'lib/icons/icon';
import { PRESENCE_OPACITY } from 'lib/animation/constants';
import { useServicesC } from '@pages/index/pricing/context/useServicesC';
import { AnimatePresence, motion } from 'framer-motion';
import { DARK_MODE } from '../../config';
import { DARK_MODE_ICON } from 'lib/icons/constants/general';

export const DarkMode = () => {
  const { extras } = useServicesC();

  return (
    <AnimatePresence initial={false}>
      {extras[DARK_MODE] && (
        <motion.div
          key={DARK_MODE}
          className='relative'
          {...PRESENCE_OPACITY}
        >
          <Focus>{DARK_MODE}</Focus>
          <I icon={DARK_MODE_ICON} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
