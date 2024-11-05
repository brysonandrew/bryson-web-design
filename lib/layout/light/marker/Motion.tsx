import { motion } from 'framer-motion';
import { TGlowMotionC } from '@brysonandrew/layout-light/config/types';
import { markerProps } from '@brysonandrew/layout-light/marker/markerProps';
import { TDivMotionProps } from '@brysonandrew/config-types';
import { FC } from 'react';

export const MarkerMotion = (
  GlowMotionFill: TGlowMotionC,
) => {
  const MarkerMotionFc: FC<TDivMotionProps> = (props) => {
    const inner = (
      <motion.div {...markerProps(props)}>
        <GlowMotionFill />
      </motion.div>
    );

    return inner;
  };

  MarkerMotionFc.displayName = 'MarkerMotionFc';

  return MarkerMotionFc;
};
