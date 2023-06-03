import { MOTION_CONFIG } from '@constants/animation';
import { useTimeoutRef } from '@hooks/useTimeoutRef';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const FadeIn = () => {
  const [isFading, setFading] = useState(false);
  const { timeoutRef } = useTimeoutRef();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setFading(true);
    }, 50);
  }, []);

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          className='fixed inset-0 bg-black z-50'
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ...MOTION_CONFIG.transition,
            duration: 2,
          }}
        />
      )}
    </AnimatePresence>
  );
};
