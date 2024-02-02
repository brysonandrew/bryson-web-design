import { resolveUrlId } from '@brysonandrew/utils';
import type { FC } from 'react';
import { FilterShell } from '../FilterShell';

const AURA_ID = 'AURA_ID';

const BASE_ANIMATION = {
  dur: '6s',
  repeatCount: 'indefinite',
};

type TProps = {
  intensity: number;
  id: string;
};
const Filter: FC<TProps> = ({ id, intensity }) => (
  <FilterShell>
    <filter
      id={id}
      x='-20%'
      y='-20%'
      width='120%'
      height='120%'
      colorInterpolationFilters='sRGB'
    >
      <feTurbulence
        in='SourceGraphic'
        baseFrequency='10'
        type='turbulence'
        numOctaves='4'
        result='MERGE_IMG'
      >
        <animate
          attributeName='baseFrequency'
          values='0.08;0.12;0.08'
          {...BASE_ANIMATION}
        />
      </feTurbulence>
      <feOffset
        in='SourceGraphic'
        dx={-intensity * 0.5}
        dy={-intensity * 0.5}
        result='OFFSET'
      >
        <animate
          attributeName='dx'
          values={`${-intensity * 0.25};${
            -intensity * 0.5
          };${-intensity * 0.25}`}
          {...BASE_ANIMATION}
        />
        <animate
          attributeName='dy'
          values={`${-intensity * 0.25};${
            -intensity * 0.5
          };${-intensity * 0.25}`}
          {...BASE_ANIMATION}
        />
      </feOffset>
      <feDisplacementMap
        in='OFFSET'
        in2='MERGE_IMG'
        scale={`${intensity * 0.5}`}
        xChannelSelector='B'
        yChannelSelector='G'
        result='DISPLACEMENT'
      >
        <animate
          attributeName='scale'
          values={`${intensity * 0.5};${intensity};${
            intensity * 0.5
          }`}
          {...BASE_ANIMATION}
        />
      </feDisplacementMap>
      <feGaussianBlur
        in='DISPLACEMENT'
        stdDeviation='0 1.3'
      >
        <animate
          attributeName='baseFrequency'
          values='0 0.7;0 1.3;0 0.7'
          {...BASE_ANIMATION}
        />
      </feGaussianBlur>
    </filter>
  </FilterShell>
);

const GlobalFilter = () => {
  return <Filter id={AURA_ID} intensity={10} />;
};

export const AURA = {
  GLOBAL: {
    Filter: GlobalFilter,
    value: resolveUrlId(AURA_ID),
  },
  Filter,
};
