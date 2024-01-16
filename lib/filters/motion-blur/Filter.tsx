import { motion } from 'framer-motion';

import { FilterShell } from '@lib/filters/FilterShell';
import { TFilterProps } from './config';
import { resolveCompositeKey } from '@lib/utils/key';
import {
  MOTION_BLUR_INTENSITY,
  MOTION_BLUR_ID,
} from '../blur/constants';

const intensity = MOTION_BLUR_INTENSITY;

export const Filter = ({
  id = MOTION_BLUR_ID,
  turbulence,
  blur,
  direction = 'x',
}: TFilterProps) => {
  const TURBULANCE_KEY = resolveCompositeKey(
    id,
    'TURBULANCE',
  );
  const MORPH_KEY = resolveCompositeKey(id, 'MORPH');
  const DISPLACEMENT_KEY = resolveCompositeKey(
    id,
    'DISPLACEMENT',
  );
  const OFFSET_KEY = resolveCompositeKey(id, 'OFFSET');

  return (
    <FilterShell>
      <filter
        id={id}
        x='-50%'
        y='-50%'
        height='200%'
        width='200%'
      >
        <feOffset
          in='SourceGraphic'
          y1='-100px'
          y2='100px'
          x1='-100px'
          x2='100px'
          result={OFFSET_KEY}
        />
        <motion.feTurbulence
          baseFrequency={turbulence}
          numOctaves='4'
          seed='2'
          type='turbulence'
          in={OFFSET_KEY}
          result={TURBULANCE_KEY}
        />
        <feMorphology
          in={TURBULANCE_KEY}
          operator='dilate'
          radius='8'
          result={MORPH_KEY}
        />

        <feDisplacementMap
          in2={MORPH_KEY}
          in={OFFSET_KEY}
          scale={intensity}
          xChannelSelector='R'
          yChannelSelector='G'
          result={DISPLACEMENT_KEY}
        />
        <motion.feGaussianBlur
          in={DISPLACEMENT_KEY}
          stdDeviation={blur}
        />
      </filter>
    </FilterShell>
  );
};
