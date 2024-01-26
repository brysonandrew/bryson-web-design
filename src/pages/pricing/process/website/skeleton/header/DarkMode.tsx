import { Focus } from '@pages/pricing/process/focus';
import { I } from '@brysonandrew/icons/icon';
import { P } from '@app/animation';
import { usePricing } from '@pages/index/pricing/PricingProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { DARK_MODE_ICON } from '@brysonandrew/icons/config/constants/general';
import { DARK_MODE } from '../../config';

export const DarkMode = () => {
  const { extras } = usePricing();

  return (
    <AnimatePresence initial={false}>
      {extras[DARK_MODE] && (
        <motion.div
          key={DARK_MODE}
          className='relative'
          {...P['-/1']}
        >
          <Focus>{DARK_MODE}</Focus>
          <I icon={DARK_MODE_ICON} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
