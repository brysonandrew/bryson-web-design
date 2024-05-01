import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Core } from './core';
import { TBaseProps } from '@brysonandrew/gallery';
import { useHoverKey } from '@brysonandrew/motion-cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import {
  TRANSITION_04_EASEIN_008,
  PRESENCE_UP_Y,
} from '@brysonandrew/motion';

type TProps = TBaseProps;
export const Footer: FC<TProps> = (props) => {
  const { BackMotionFill, GLOW_BOX } = useApp();
  const { handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    'footer'
  );
  return (
    <motion.footer
      className="relative flex justify-center w-full z-10"
      transition={TRANSITION_04_EASEIN_008}
      {...PRESENCE_UP_Y}
      {...handlers}
    >
      <BackMotionFill
        style={{ boxShadow: GLOW_BOX['white'] }}
      />
      <Core {...props} />
    </motion.footer>
  );
};
