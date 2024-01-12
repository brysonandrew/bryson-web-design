import { Focus } from '@pages/process/focus';
import { I } from '@components/decoration/Icon';
import { PRESENCE_OPACITY } from '@constants/animation';
import { useServicesC } from '@pages/index/pricing/context/useServicesC';
import { AnimatePresence, motion } from 'framer-motion';
import { DARK_MODE } from '../../config';

export const DarkMode = () => {
  const { extras } = useServicesC();

  return (
    <AnimatePresence>
      {extras[DARK_MODE] && (
        <motion.div
          key={DARK_MODE}
          className='relative'
          {...PRESENCE_OPACITY}
        >
          <Focus>{DARK_MODE}</Focus>
          <I icon='mdi:theme-light-dark' />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
