import { useDetectGPU } from '@react-three/drei';
import type { MotionValue } from 'framer-motion';
import {
  useVelocity,
  useTransform,
  useMotionTemplate,
  motion,
} from 'framer-motion';
import {
  MOTION_BLUR_ID,
  MOTION_BLUR_INTENSITY,
} from './constants';

const id = MOTION_BLUR_ID;
const intensity = MOTION_BLUR_INTENSITY;

type TProps = {
  motionX: MotionValue<number>;
};
export const Filter = ({ motionX }: TProps) => {
  const { isMobile, tier } = useDetectGPU();
  const velocity = useVelocity(motionX);
  const acceleration = useVelocity(velocity);
  const v = useTransform(
    velocity,
    (v) => Math.abs(v) * 0.5,
  );
  const a = useTransform(
    acceleration,
    (v) => Math.abs(v) * 0.5,
  );
  const turbulence = useMotionTemplate`0 ${a}`;
  const blur = useMotionTemplate`${v} 0`;
  return (
    <>
      {tier > 1 && !isMobile && (
        <svg width='0' height='0'>
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
            <feOffset
              in='SourceGraphic'
              dx={-intensity * 0.5}
              dy={-intensity * 0.5}
              result={`${id}-offset`}
            />
            <feDisplacementMap
              in2={`${id}-morph`}
              in={`${id}-offset`}
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
        </svg>
      )}
    </>
  );
};
