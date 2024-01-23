import type { MotionValue } from 'framer-motion';
import {
  useVelocity,
  useTransform,
  useMotionTemplate,
  motion,
} from 'framer-motion';
import { FilterShell } from '@brysonandrew/filters/FilterShell';
import {
  MOTION_BLUR_ID,
  MOTION_BLUR_INTENSITY,
} from '@brysonandrew/filters';

const id = MOTION_BLUR_ID;
const intensity = MOTION_BLUR_INTENSITY;

type TProps = {
  motionValue: MotionValue<number>;
};
export const Blur = ({ motionValue }: TProps) => {
  const velocity = useVelocity(motionValue);
  const acceleration = useVelocity(velocity);
  const v = useTransform(velocity, (v) => {
    return Math.abs(v) * 0.5;
  });
  const a = useTransform(
    acceleration,
    (v) => Math.abs(v) * 0.5,
  );
  const turbulence = useMotionTemplate`0 ${a}`;
  const blur = useMotionTemplate`${v} 0`;
  return (
    <FilterShell>
      <filter
        id={id}
        x='-25%'
        y='-25%'
        height='150%'
        width='150%'
      >
        <motion.feTurbulence
          baseFrequency={turbulence}
          numOctaves='4'
          seed='2'
          type='fractalNoise'
          in='SourceGraphic'
          result={`${id}-turbulence`}
        />
        <feMorphology
          in={`${id}-turbulence`}
          operator='dilate'
          radius='10'
          result={`${id}-morph`}
        />
        <feDisplacementMap
          in2={`${id}-morph`}
          in='SourceGraphic'
          scale={intensity}
          xChannelSelector='R'
          yChannelSelector='G'
          result='DISPLACEMENT'
        />
        <motion.feGaussianBlur
          in='DISPLACEMENT'
          stdDeviation={blur}
        />
      </filter>
    </FilterShell>
  );
};
