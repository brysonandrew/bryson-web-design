import { MOTION_CONFIG } from '@constants/animation';
import { useTimeoutRef } from '@hooks/useTimeoutRef';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useContext } from '@state/Context';

export const FadeIn = () => {
  const { isInit } = useContext();

  const [isFading, setFading] = useState(false);
  const { timeoutRef } = useTimeoutRef();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setFading(true);
    }, 50);
  }, []);

  return (
    <AnimatePresence>
      {isInit && !isFading && (
        <motion.div
          className='fixed inset-0 bg-black z-50 pointer-events-none'
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
