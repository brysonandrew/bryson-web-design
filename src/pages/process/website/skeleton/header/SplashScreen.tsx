import { Focus } from '@components/interactive/focus';
import { I } from '@components/Icon';
import { PRESENCE_OPACITY } from '@constants/animation';
import { useServicesC } from '@context/domains/services/useServicesC';
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
