import { Focus } from '@pages/_workshop/process/focus';
import { I } from '@lib/icons/icon';
import { PRESENCE_OPACITY } from '@lib/animation/constants';
import { useServicesC } from '@pages/index/pricing/context/useServicesC';
import { AnimatePresence, motion } from 'framer-motion';
import { DARK_MODE } from '../../config';

export const SplashScreen = () => {
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
