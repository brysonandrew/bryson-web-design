import { motion } from 'framer-motion';
import { TGlowMotionC } from '@brysonandrew/layout-light/config/types';
import { markerProps } from '@brysonandrew/layout-light/marker/markerProps';
import { TDivMotionProps } from '@brysonandrew/config-types';

export const MarkerMotion =
  (GlowMotionFill: TGlowMotionC) =>
  (props: TDivMotionProps) =>
    (
      <motion.div {...markerProps(props)}>
        <GlowMotionFill />
      </motion.div>
    );
