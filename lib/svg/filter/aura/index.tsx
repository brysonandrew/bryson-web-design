


import { SvgWrap } from '@brysonandrew/svg';
import { resolveUrlId } from '@brysonandrew/utils-attributes';
import type { FC, SVGProps } from 'react';

const AURA_ID = 'AURA_ID';

const DEFAULT_ANIMATE_PROPS = {
  dur: '6s',
  repeatCount: 'indefinite',
};

type TProps = {
  id: string;
  intensity?: number;
  animateProps?: Partial<typeof DEFAULT_ANIMATE_PROPS> & SVGProps<SVGElement>
};
const Filter: FC<TProps> = ({ id, intensity = 10, animateProps = DEFAULT_ANIMATE_PROPS }) => (
  <SvgWrap>
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
          {...animateProps}
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
          {...animateProps}
        />
        <animate
          attributeName='dy'
          values={`${-intensity * 0.25};${
            -intensity * 0.5
          };${-intensity * 0.25}`}
          {...animateProps}
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
          {...animateProps}
        />
      </feDisplacementMap>
      <feGaussianBlur
        in='DISPLACEMENT'
        stdDeviation='0 1.3'
      >
        <animate
          attributeName='baseFrequency'
          values='0 0.7;0 1.3;0 0.7'
          {...animateProps}
        />
      </feGaussianBlur>
    </filter>
  </SvgWrap>
);

const GlobalFilter: FC<Partial<TProps>>  = (props) => {
  return <Filter id={AURA_ID} {...props} />;
};

export const AURA = {
  GLOBAL: {
    Filter: GlobalFilter,
    value: resolveUrlId(AURA_ID),
  },
  Filter,
};
