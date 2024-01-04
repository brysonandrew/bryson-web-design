import { I } from '@components/Icon';
import { PRESENCE_OPACITY } from '@constants/animation';
import { useServices } from '@context/domains/services';
import { AnimatePresence, motion } from 'framer-motion';
import { DARK_LIGHT_MODE, HEADER } from '../../config';
import { Focus } from '../../Focus';

export const Right = () => {
  const { extras } = useServices();
  return (
    <div className='relative row gap-4'>
      <AnimatePresence>
        {extras[DARK_LIGHT_MODE] && (
          <motion.div
            key={DARK_LIGHT_MODE}
            className='relative'
            {...PRESENCE_OPACITY}
          >
            <Focus>{DARK_LIGHT_MODE}</Focus>
            <I icon='mdi:theme-light-dark' />
          </motion.div>
        )}
      </AnimatePresence>
      <div className='h-2 w-8 bg-white' />
    </div>
  );
};
