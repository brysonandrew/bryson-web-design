import { Focus } from '@pages/pricing/process/focus';
import { I } from '@brysonandrew/icons-i';
import { usePricing } from '@pages/index/pricing/PricingProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { DARK_MODE_ICON } from '@brysonandrew/icons-keys/general';
import { DARK_MODE } from '../../config';
import { PRESENCE_OPACITY } from '@app/animation';

export const DarkMode = () => {
  const { extras } = usePricing();

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
