import type { MotionValue } from 'framer-motion';
import { motion } from 'framer-motion';
import {
  MOTION_BLUR_ID,
  MOTION_BLUR_INTENSITY,
} from '../../gallery/sections/constants';
import { FilterShell } from '@components/filters/FilterShell';

const id = MOTION_BLUR_ID;
const intensity = MOTION_BLUR_INTENSITY;

export type TFilterProps = {
  turbulence: MotionValue;
  blur: MotionValue;
};
export const Filter = ({
  turbulence,
  blur,
}: TFilterProps) => {
  return (
    <FilterShell>
      <filter
        id={id}
        x='-25%'
        y='-50%'
        height='150%'
        width='200%'
      >
        <motion.feTurbulence
          baseFrequency={turbulence}
          numOctaves='4'
          seed='2'
          type='turbulence'
          in='SourceGraphic'
          result={`${id}-turbulence`}
        />
        <feMorphology
          in={`${id}-turbulence`}
          operator='dilate'
          radius='8'
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
